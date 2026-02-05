import json, time, urllib.parse, urllib.request

PUBS_PATH = "assets/publications.json"
OUT_JS = "assets/citations.js"

def semantic_scholar_cites(title: str):
    q = urllib.parse.quote(title)
    url = f"https://api.semanticscholar.org/graph/v1/paper/search?query={q}&limit=1&fields=citationCount"
    req = urllib.request.Request(url, headers={"Accept":"application/json","User-Agent":"vk-citations-bot"})
    with urllib.request.urlopen(req, timeout=30) as r:
        j = json.loads(r.read().decode("utf-8"))
    hit = (j.get("data") or [None])[0]
    if hit and isinstance(hit.get("citationCount"), int):
        return hit["citationCount"]
    return None

def main():
    pubs = json.load(open(PUBS_PATH, "r", encoding="utf-8"))
    items = {}
    for p in pubs:
        pid = p.get("id")
        title = (p.get("title") or "").strip()
        if not pid or not title:
            continue
        try:
            items[pid] = semantic_scholar_cites(title)
        except Exception:
            items[pid] = None
        time.sleep(1.1)

    out = {"updated": time.strftime("%Y-%m-%d"), "items": items}
    js = "window.VK_CITATIONS = " + json.dumps(out, ensure_ascii=False, indent=2) + ";\n"
    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write(js)

if __name__ == "__main__":
    main()
