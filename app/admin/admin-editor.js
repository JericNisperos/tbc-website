"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function AdminEditor({ initialMenu }) {
  const [menu, setMenu] = useState(initialMenu);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const dirty = JSON.stringify(menu) !== JSON.stringify(initialMenu);

  function updateSection(kind, id, updater) {
    setMenu((m) => ({
      ...m,
      [kind]: m[kind].map((s) => (s.id === id ? updater(s) : s)),
    }));
  }

  async function save() {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/menu", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menu),
      });
      if (res.ok) {
        setMessage({ kind: "ok", text: "Saved" });
        startTransition(() => router.refresh());
      } else {
        const body = await res.json().catch(() => ({}));
        setMessage({
          kind: "err",
          text: body.error || `Save failed (${res.status})`,
        });
      }
    } catch (err) {
      setMessage({ kind: "err", text: err.message || "Network error" });
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  function discard() {
    setMenu(initialMenu);
    setMessage(null);
  }

  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 pb-16">
      <header className="sticky top-0 z-20 -mx-4 md:-mx-8 px-4 md:px-8 py-4 bg-surface-container-low border-b-2 border-primary mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-headline-md uppercase font-bold">
            Admin
          </h1>
          <p className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest">
            The Barrio Café · Menu Editor
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {message && (
            <span
              className={`font-mono text-[12px] px-3 py-1 border-2 ${
                message.kind === "ok"
                  ? "border-primary"
                  : "border-tertiary text-tertiary"
              }`}
            >
              {message.text}
            </span>
          )}
          {dirty && !message && (
            <span className="font-mono text-[12px] px-3 py-1 border-2 border-dashed border-on-surface-variant text-on-surface-variant">
              Unsaved changes
            </span>
          )}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-label-caps uppercase px-3 py-2 border-2 border-primary hover:bg-surface"
          >
            View Menu
          </a>
          <button
            type="button"
            onClick={discard}
            disabled={!dirty || saving}
            className="font-mono text-label-caps uppercase px-3 py-2 border-2 border-primary hover:bg-surface disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Discard
          </button>
          <button
            type="button"
            onClick={save}
            disabled={!dirty || saving || pending}
            className="font-mono text-label-caps uppercase px-4 py-2 bg-primary text-on-primary hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={logout}
            className="font-mono text-label-caps uppercase px-3 py-2 border-2 border-primary hover:bg-surface"
          >
            Logout
          </button>
        </div>
      </header>

      <KindBlock title="Drinks">
        {menu.drinks.map((section) => (
          <SectionEditor
            key={section.id}
            section={section}
            onChange={(updater) => updateSection("drinks", section.id, updater)}
          />
        ))}
      </KindBlock>

      <KindBlock title="Food">
        {menu.food.map((section) => (
          <SectionEditor
            key={section.id}
            section={section}
            onChange={(updater) => updateSection("food", section.id, updater)}
          />
        ))}
      </KindBlock>
    </div>
  );
}

function KindBlock({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-display-lg uppercase italic leading-tight mb-4 border-b-2 border-primary pb-2">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function SectionEditor({ section, onChange }) {
  if (section.type === "wings") {
    return <WingsSection section={section} onChange={onChange} />;
  }
  if (section.type === "customizable") {
    return <CustomizableSection section={section} onChange={onChange} />;
  }
  return <StandardSection section={section} onChange={onChange} />;
}

function SectionShell({ section, onChange, children, count }) {
  return (
    <details
      className="menu-card hard-shadow-sm bg-surface-container-lowest"
      open={false}
    >
      <summary className="cursor-pointer flex items-center justify-between gap-4 list-none">
        <div className="flex items-baseline gap-3 min-w-0">
          <span className="font-display text-headline-md uppercase font-bold truncate">
            {section.title || section.id}
          </span>
          <span className="font-mono text-[12px] uppercase tracking-widest text-on-surface-variant whitespace-nowrap">
            {count}
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">
          {section.id}
        </span>
      </summary>
      <div className="mt-6 pt-6 border-t-2 border-primary space-y-5">
        <TitleField
          label="Section title"
          value={section.title}
          onChange={(v) => onChange((s) => ({ ...s, title: v }))}
        />
        {children}
      </div>
    </details>
  );
}

function StandardSection({ section, onChange }) {
  const isHotIced = section.type === "hotIced";
  const updateItem = (i, patch) =>
    onChange((s) => ({
      ...s,
      items: s.items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)),
    }));
  const removeItem = (i) =>
    onChange((s) => ({
      ...s,
      items: s.items.filter((_, idx) => idx !== i),
    }));
  const addItem = () =>
    onChange((s) => ({
      ...s,
      items: [
        ...s.items,
        isHotIced
          ? { name: "", hot: "—", iced: "" }
          : { name: "", price: "" },
      ],
    }));
  const move = (i, dir) =>
    onChange((s) => {
      const j = i + dir;
      if (j < 0 || j >= s.items.length) return s;
      const items = s.items.slice();
      [items[i], items[j]] = [items[j], items[i]];
      return { ...s, items };
    });

  return (
    <SectionShell
      section={section}
      onChange={onChange}
      count={`${section.items.length} item${section.items.length === 1 ? "" : "s"}`}
    >
      {section.image !== undefined && (
        <TitleField
          label="Image path"
          value={section.image || ""}
          onChange={(v) => onChange((s) => ({ ...s, image: v }))}
          mono
        />
      )}
      <ItemsTable
        items={section.items}
        isHotIced={isHotIced}
        onItem={updateItem}
        onRemove={removeItem}
        onMove={move}
      />
      <AddButton onClick={addItem} />
    </SectionShell>
  );
}

function WingsSection({ section, onChange }) {
  const updateItem = (i, patch) =>
    onChange((s) => ({
      ...s,
      items: s.items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)),
    }));
  const removeItem = (i) =>
    onChange((s) => ({
      ...s,
      items: s.items.filter((_, idx) => idx !== i),
    }));
  const addItem = () =>
    onChange((s) => ({
      ...s,
      items: [...s.items, { name: "", price: "" }],
    }));
  const move = (i, dir) =>
    onChange((s) => {
      const j = i + dir;
      if (j < 0 || j >= s.items.length) return s;
      const items = s.items.slice();
      [items[i], items[j]] = [items[j], items[i]];
      return { ...s, items };
    });

  const updateFlavor = (i, v) =>
    onChange((s) => ({
      ...s,
      flavors: s.flavors.map((f, idx) => (idx === i ? v : f)),
    }));
  const removeFlavor = (i) =>
    onChange((s) => ({
      ...s,
      flavors: s.flavors.filter((_, idx) => idx !== i),
    }));
  const addFlavor = () =>
    onChange((s) => ({ ...s, flavors: [...s.flavors, ""] }));

  return (
    <SectionShell
      section={section}
      onChange={onChange}
      count={`${section.items.length} + ${section.flavors.length} flavors`}
    >
      <TitleField
        label="Image path"
        value={section.image || ""}
        onChange={(v) => onChange((s) => ({ ...s, image: v }))}
        mono
      />
      <ItemsTable
        items={section.items}
        onItem={updateItem}
        onRemove={removeItem}
        onMove={move}
      />
      <AddButton onClick={addItem} label="+ Add Item" />

      <div className="pt-4 border-t-2 border-dashed border-on-surface-variant">
        <div className="font-mono text-[12px] uppercase tracking-widest text-on-surface-variant mb-3">
          Available Flavors
        </div>
        <div className="space-y-2">
          {section.flavors.map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                value={f}
                onChange={(e) => updateFlavor(i, e.target.value)}
                className="flex-1 border-2 border-primary rounded p-2 font-body"
              />
              <RemoveButton onClick={() => removeFlavor(i)} />
            </div>
          ))}
        </div>
        <AddButton onClick={addFlavor} label="+ Add Flavor" />
      </div>
    </SectionShell>
  );
}

function CustomizableSection({ section, onChange }) {
  const updateSub = (id, updater) =>
    onChange((s) => ({
      ...s,
      subsections: s.subsections.map((sub) =>
        sub.id === id ? updater(sub) : sub,
      ),
    }));
  const updateAddOn = (i, patch) =>
    onChange((s) => ({
      ...s,
      addOns: s.addOns.map((a, idx) => (idx === i ? { ...a, ...patch } : a)),
    }));
  const removeAddOn = (i) =>
    onChange((s) => ({
      ...s,
      addOns: s.addOns.filter((_, idx) => idx !== i),
    }));
  const addAddOn = () =>
    onChange((s) => ({
      ...s,
      addOns: [...s.addOns, { name: "", price: "" }],
    }));

  return (
    <SectionShell
      section={section}
      onChange={onChange}
      count={`${section.subsections.length} sub-sections · ${section.addOns.length} add-ons`}
    >
      <TitleField
        label="Subtitle (shown under the title)"
        value={section.subtitle || ""}
        onChange={(v) => onChange((s) => ({ ...s, subtitle: v }))}
      />

      {section.subsections.map((sub) => (
        <CustomizableSubsection
          key={sub.id}
          sub={sub}
          onChange={(updater) => updateSub(sub.id, updater)}
        />
      ))}

      <div className="pt-4 border-t-2 border-dashed border-on-surface-variant">
        <div className="font-mono text-[12px] uppercase tracking-widest text-on-surface-variant mb-3">
          Add-Ons
        </div>
        <ItemsTable
          items={section.addOns}
          onItem={updateAddOn}
          onRemove={removeAddOn}
          priceLabel="+Price"
        />
        <AddButton onClick={addAddOn} label="+ Add Add-On" />
      </div>
    </SectionShell>
  );
}

function CustomizableSubsection({ sub, onChange }) {
  const updateItem = (i, patch) =>
    onChange((s) => ({
      ...s,
      items: s.items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)),
    }));
  const removeItem = (i) =>
    onChange((s) => ({
      ...s,
      items: s.items.filter((_, idx) => idx !== i),
    }));
  const addItem = () =>
    onChange((s) => ({
      ...s,
      items: [...s.items, { name: "", price: "" }],
    }));
  const move = (i, dir) =>
    onChange((s) => {
      const j = i + dir;
      if (j < 0 || j >= s.items.length) return s;
      const items = s.items.slice();
      [items[i], items[j]] = [items[j], items[i]];
      return { ...s, items };
    });

  return (
    <div className="border-2 border-primary p-4 rounded">
      <TitleField
        label="Sub-section title"
        value={sub.title}
        onChange={(v) => onChange((s) => ({ ...s, title: v }))}
      />
      <ItemsTable
        items={sub.items}
        onItem={updateItem}
        onRemove={removeItem}
        onMove={move}
      />
      <AddButton onClick={addItem} />
    </div>
  );
}

function ItemsTable({
  items,
  isHotIced = false,
  onItem,
  onRemove,
  onMove,
  priceLabel = "Price",
}) {
  if (!items.length) {
    return (
      <p className="font-mono text-[12px] text-on-surface-variant italic">
        No items yet.
      </p>
    );
  }
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant px-2">
        <span className="flex-1">Name</span>
        {isHotIced ? (
          <>
            <span className="w-20 text-right">Hot</span>
            <span className="w-20 text-right">Iced</span>
          </>
        ) : (
          <span className="w-24 text-right">{priceLabel}</span>
        )}
        <span className="w-8" />
        {onMove && <span className="w-16" />}
      </div>
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex-1 flex flex-col gap-1">
            <input
              type="text"
              value={it.name || ""}
              onChange={(e) => onItem(i, { name: e.target.value })}
              className="border-2 border-primary rounded p-2 font-body"
              placeholder="Item name"
            />
            {it.description !== undefined && (
              <input
                type="text"
                value={it.description || ""}
                onChange={(e) => onItem(i, { description: e.target.value })}
                className="border-2 border-dashed border-on-surface-variant rounded p-2 font-body text-[13px] text-on-surface-variant"
                placeholder="Description (optional)"
              />
            )}
          </div>
          {isHotIced ? (
            <>
              <input
                type="text"
                value={it.hot ?? ""}
                onChange={(e) => onItem(i, { hot: e.target.value })}
                className="w-20 border-2 border-primary rounded p-2 font-mono text-right"
                placeholder="—"
              />
              <input
                type="text"
                value={it.iced ?? ""}
                onChange={(e) => onItem(i, { iced: e.target.value })}
                className="w-20 border-2 border-primary rounded p-2 font-mono text-right"
                placeholder="—"
              />
            </>
          ) : (
            <input
              type="text"
              value={it.price ?? ""}
              onChange={(e) => onItem(i, { price: e.target.value })}
              className="w-24 border-2 border-primary rounded p-2 font-mono text-right"
              placeholder="0"
            />
          )}
          <RemoveButton onClick={() => onRemove(i)} />
          {onMove && (
            <div className="flex flex-col gap-0.5 w-16">
              <button
                type="button"
                onClick={() => onMove(i, -1)}
                disabled={i === 0}
                className="text-[10px] font-mono uppercase border border-outline rounded px-1 disabled:opacity-30"
                title="Move up"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => onMove(i, 1)}
                disabled={i === items.length - 1}
                className="text-[10px] font-mono uppercase border border-outline rounded px-1 disabled:opacity-30"
                title="Move down"
              >
                ↓
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function TitleField({ label, value, onChange, mono = false }) {
  return (
    <label className="block">
      <span className="block font-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-1">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border-2 border-primary rounded p-2 ${mono ? "font-mono" : "font-body"}`}
      />
    </label>
  );
}

function AddButton({ onClick, label = "+ Add Item" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-2 font-mono text-[12px] uppercase tracking-widest px-3 py-2 border-2 border-dashed border-primary rounded hover:bg-surface"
    >
      {label}
    </button>
  );
}

function RemoveButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Remove"
      className="w-8 h-8 flex items-center justify-center border-2 border-primary rounded hover:bg-tertiary hover:text-on-tertiary font-mono text-[14px]"
    >
      ×
    </button>
  );
}
