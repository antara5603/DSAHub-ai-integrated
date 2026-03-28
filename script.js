const LC = "https://leetcode.com/problems/";
const TOPICS = [
  {name:"Arrays & Strings", color:"#6c63ff", patterns:[
    {name:"Hash Map", desc:"Key-value lookups, frequency counts", qs:[
      {id:1,t:"Two Sum",d:"Easy",cos:["Google","Amazon"],lc:"two-sum"},
      {id:2,t:"Group Anagrams",d:"Medium",cos:["Amazon","Facebook"],lc:"group-anagrams"},
      {id:3,t:"Longest Consecutive Sequence",d:"Medium",cos:["Google","Amazon"],lc:"longest-consecutive-sequence"},
      {id:4,t:"Valid Anagram",d:"Easy",cos:["Amazon","Microsoft"],lc:"valid-anagram"},
    ]},
    {name:"Sliding Window", desc:"Subarray/substring optimization", qs:[
      {id:5,t:"Best Time to Buy & Sell Stock",d:"Easy",cos:["Amazon","Adobe"],lc:"best-time-to-buy-and-sell-stock"},
      {id:6,t:"Longest Substring Without Repeating Chars",d:"Medium",cos:["Google","Amazon"],lc:"longest-substring-without-repeating-characters"},
      {id:7,t:"Minimum Window Substring",d:"Hard",cos:["Facebook","Google"],lc:"minimum-window-substring"},
      {id:8,t:"Permutation in String",d:"Medium",cos:["Microsoft","Amazon"],lc:"permutation-in-string"},
    ]},
    {name:"Two Pointers", desc:"Opposite ends or same direction", qs:[
      {id:9,t:"Container With Most Water",d:"Medium",cos:["Amazon","Apple"],lc:"container-with-most-water"},
      {id:10,t:"Trapping Rain Water",d:"Hard",cos:["Google","Microsoft"],lc:"trapping-rain-water"},
      {id:11,t:"3Sum",d:"Medium",cos:["Amazon","Google"],lc:"3sum"},
      {id:12,t:"Valid Palindrome",d:"Easy",cos:["Facebook","Microsoft"],lc:"valid-palindrome"},
    ]},
    {name:"Prefix Sum", desc:"Running totals for range queries", qs:[
      {id:13,t:"Product of Array Except Self",d:"Medium",cos:["Amazon","Microsoft"],lc:"product-of-array-except-self"},
      {id:14,t:"Subarray Sum Equals K",d:"Medium",cos:["Facebook","Amazon"],lc:"subarray-sum-equals-k"},
    ]},
  ]},
  {name:"Linked Lists", color:"#8b85ff", patterns:[
    {name:"Fast & Slow Pointers", desc:"Cycle detection, midpoint finding", qs:[
      {id:15,t:"Linked List Cycle",d:"Easy",cos:["Amazon"],lc:"linked-list-cycle"},
      {id:16,t:"Middle of the Linked List",d:"Easy",cos:["Amazon","Google"],lc:"middle-of-the-linked-list"},
      {id:17,t:"Remove Nth Node From End",d:"Medium",cos:["Microsoft","Google"],lc:"remove-nth-node-from-end-of-list"},
      {id:18,t:"Find the Duplicate Number",d:"Medium",cos:["Google","Amazon"],lc:"find-the-duplicate-number"},
    ]},
    {name:"Reversal", desc:"In-place pointer manipulation", qs:[
      {id:19,t:"Reverse Linked List",d:"Easy",cos:["Amazon","Microsoft"],lc:"reverse-linked-list"},
      {id:20,t:"Reverse Nodes in k-Group",d:"Hard",cos:["Google","Microsoft"],lc:"reverse-nodes-in-k-group"},
    ]},
    {name:"Merge", desc:"Combining sorted lists", qs:[
      {id:21,t:"Merge Two Sorted Lists",d:"Easy",cos:["Amazon","Google"],lc:"merge-two-sorted-lists"},
      {id:22,t:"Merge K Sorted Lists",d:"Hard",cos:["Google","Amazon"],lc:"merge-k-sorted-lists"},
    ]},
    {name:"Design", desc:"Hybrid data structures", qs:[
      {id:23,t:"LRU Cache",d:"Medium",cos:["Google","Amazon","Microsoft"],lc:"lru-cache"},
      {id:24,t:"Copy List with Random Pointer",d:"Medium",cos:["Amazon","Microsoft"],lc:"copy-list-with-random-pointer"},
    ]},
  ]},
  {name:"Trees", color:"#22c984", patterns:[
    {name:"DFS", desc:"Preorder, inorder, postorder", qs:[
      {id:25,t:"Invert Binary Tree",d:"Easy",cos:["Google"],lc:"invert-binary-tree"},
      {id:26,t:"Maximum Depth of Binary Tree",d:"Easy",cos:["Amazon","LinkedIn"],lc:"maximum-depth-of-binary-tree"},
      {id:27,t:"Validate Binary Search Tree",d:"Medium",cos:["Google","Amazon"],lc:"validate-binary-search-tree"},
      {id:28,t:"Lowest Common Ancestor",d:"Medium",cos:["Facebook","Amazon"],lc:"lowest-common-ancestor-of-a-binary-tree"},
      {id:29,t:"Binary Tree Maximum Path Sum",d:"Hard",cos:["Facebook"],lc:"binary-tree-maximum-path-sum"},
      {id:30,t:"Diameter of Binary Tree",d:"Easy",cos:["Facebook","Google"],lc:"diameter-of-binary-tree"},
    ]},
    {name:"BFS", desc:"Level-by-level traversal", qs:[
      {id:31,t:"Binary Tree Level Order Traversal",d:"Medium",cos:["Microsoft","Amazon"],lc:"binary-tree-level-order-traversal"},
      {id:32,t:"Binary Tree Right Side View",d:"Medium",cos:["Facebook","Amazon"],lc:"binary-tree-right-side-view"},
      {id:33,t:"Minimum Depth of Binary Tree",d:"Easy",cos:["Google"],lc:"minimum-depth-of-binary-tree"},
    ]},
    {name:"Construct / Serialize", desc:"Tree encoding and reconstruction", qs:[
      {id:34,t:"Serialize and Deserialize Binary Tree",d:"Hard",cos:["Google","Facebook"],lc:"serialize-and-deserialize-binary-tree"},
      {id:35,t:"Construct BT from Preorder & Inorder",d:"Medium",cos:["Amazon","Microsoft"],lc:"construct-binary-tree-from-preorder-and-inorder-traversal"},
    ]},
  ]},
  {name:"Graphs", color:"#f5a623", patterns:[
    {name:"BFS", desc:"Shortest path, level traversal", qs:[
      {id:36,t:"Number of Islands",d:"Medium",cos:["Amazon","Google"],lc:"number-of-islands"},
      {id:37,t:"Word Ladder",d:"Hard",cos:["Amazon","Google"],lc:"word-ladder"},
      {id:38,t:"Rotting Oranges",d:"Medium",cos:["Amazon","Facebook"],lc:"rotting-oranges"},
      {id:39,t:"Walls and Gates",d:"Medium",cos:["Facebook","Google"],lc:"walls-and-gates"},
    ]},
    {name:"DFS", desc:"Connected components, exploration", qs:[
      {id:40,t:"Clone Graph",d:"Medium",cos:["Facebook","Google"],lc:"clone-graph"},
      {id:41,t:"Pacific Atlantic Water Flow",d:"Medium",cos:["Google"],lc:"pacific-atlantic-water-flow"},
      {id:42,t:"Surrounded Regions",d:"Medium",cos:["Google","Amazon"],lc:"surrounded-regions"},
    ]},
    {name:"Topological Sort", desc:"Dependency ordering in DAGs", qs:[
      {id:43,t:"Course Schedule",d:"Medium",cos:["Google","Amazon"],lc:"course-schedule"},
      {id:44,t:"Course Schedule II",d:"Medium",cos:["Google","Amazon"],lc:"course-schedule-ii"},
      {id:45,t:"Alien Dictionary",d:"Hard",cos:["Google","Facebook"],lc:"alien-dictionary"},
    ]},
    {name:"Union Find", desc:"Disjoint set for grouping nodes", qs:[
      {id:46,t:"Number of Connected Components",d:"Medium",cos:["LinkedIn"],lc:"number-of-connected-components-in-an-undirected-graph"},
      {id:47,t:"Redundant Connection",d:"Medium",cos:["Amazon"],lc:"redundant-connection"},
      {id:48,t:"Graph Valid Tree",d:"Medium",cos:["LinkedIn","Google"],lc:"graph-valid-tree"},
    ]},
  ]},
  {name:"Dynamic Programming", color:"#f06060", patterns:[
    {name:"1D DP", desc:"Single-state recurrence", qs:[
      {id:49,t:"Climbing Stairs",d:"Easy",cos:["Amazon","Adobe"],lc:"climbing-stairs"},
      {id:50,t:"House Robber",d:"Medium",cos:["Amazon","Microsoft"],lc:"house-robber"},
      {id:51,t:"Decode Ways",d:"Medium",cos:["Facebook","Amazon"],lc:"decode-ways"},
      {id:52,t:"Word Break",d:"Medium",cos:["Google","Amazon"],lc:"word-break"},
    ]},
    {name:"2D DP", desc:"Grid or string pair problems", qs:[
      {id:53,t:"Longest Common Subsequence",d:"Medium",cos:["Google","Amazon"],lc:"longest-common-subsequence"},
      {id:54,t:"Edit Distance",d:"Hard",cos:["Google","Amazon"],lc:"edit-distance"},
      {id:55,t:"Unique Paths",d:"Medium",cos:["Amazon","Microsoft"],lc:"unique-paths"},
      {id:56,t:"Minimum Path Sum",d:"Medium",cos:["Amazon","Adobe"],lc:"minimum-path-sum"},
    ]},
    {name:"Unbounded Knapsack", desc:"Infinite item selection", qs:[
      {id:57,t:"Coin Change",d:"Medium",cos:["Amazon","Microsoft"],lc:"coin-change"},
      {id:58,t:"Coin Change II",d:"Medium",cos:["Amazon"],lc:"coin-change-ii"},
    ]},
    {name:"DP + Binary Search", desc:"Optimized subsequence problems", qs:[
      {id:59,t:"Longest Increasing Subsequence",d:"Medium",cos:["Google","Microsoft"],lc:"longest-increasing-subsequence"},
    ]},
    {name:"Interval DP", desc:"Problems on ranges/intervals", qs:[
      {id:60,t:"Burst Balloons",d:"Hard",cos:["Google"],lc:"burst-balloons"},
      {id:61,t:"Matrix Chain Multiplication",d:"Hard",cos:["Google","Microsoft"],lc:"minimum-score-triangulation-of-polygon"},
    ]},
  ]},
  {name:"Binary Search", color:"#4ea8de", patterns:[
    {name:"Classic Binary Search", desc:"Search in sorted space", qs:[
      {id:62,t:"Binary Search",d:"Easy",cos:["Google"],lc:"binary-search"},
      {id:63,t:"Search in Rotated Sorted Array",d:"Medium",cos:["Amazon","Microsoft"],lc:"search-in-rotated-sorted-array"},
      {id:64,t:"Find Minimum in Rotated Array",d:"Medium",cos:["Amazon","Google"],lc:"find-minimum-in-rotated-sorted-array"},
      {id:65,t:"Median of Two Sorted Arrays",d:"Hard",cos:["Google","Apple"],lc:"median-of-two-sorted-arrays"},
      {id:66,t:"Search a 2D Matrix",d:"Medium",cos:["Amazon","Microsoft"],lc:"search-a-2d-matrix"},
    ]},
    {name:"Binary Search on Answer", desc:"Search on a value space", qs:[
      {id:67,t:"Koko Eating Bananas",d:"Medium",cos:["Google"],lc:"koko-eating-bananas"},
      {id:68,t:"Capacity to Ship Packages",d:"Medium",cos:["Amazon"],lc:"capacity-to-ship-packages-within-d-days"},
      {id:69,t:"Split Array Largest Sum",d:"Hard",cos:["Google","Facebook"],lc:"split-array-largest-sum"},
    ]},
  ]},
  {name:"Heaps & Priority Queues", color:"#22c984", patterns:[
    {name:"Top K Pattern", desc:"K largest/smallest/frequent elements", qs:[
      {id:70,t:"Kth Largest Element in Array",d:"Medium",cos:["Amazon","Facebook"],lc:"kth-largest-element-in-an-array"},
      {id:71,t:"Top K Frequent Elements",d:"Medium",cos:["Amazon","Google"],lc:"top-k-frequent-elements"},
      {id:72,t:"K Closest Points to Origin",d:"Medium",cos:["Amazon","Facebook"],lc:"k-closest-points-to-origin"},
    ]},
    {name:"Two Heaps", desc:"Median tracking, balanced partition", qs:[
      {id:73,t:"Find Median from Data Stream",d:"Hard",cos:["Google","Amazon"],lc:"find-median-from-data-stream"},
    ]},
    {name:"Greedy + Heap", desc:"Scheduling and simulation problems", qs:[
      {id:74,t:"Task Scheduler",d:"Medium",cos:["Facebook","Amazon"],lc:"task-scheduler"},
      {id:75,t:"Reorganize String",d:"Medium",cos:["Google","Amazon"],lc:"reorganize-string"},
      {id:76,t:"Design Twitter",d:"Medium",cos:["Twitter"],lc:"design-twitter"},
    ]},
  ]},
  {name:"Backtracking", color:"#b47aff", patterns:[
    {name:"Subsets / Combinations", desc:"Choose k from n elements", qs:[
      {id:77,t:"Subsets",d:"Medium",cos:["Facebook","Amazon"],lc:"subsets"},
      {id:78,t:"Subsets II",d:"Medium",cos:["Amazon"],lc:"subsets-ii"},
      {id:79,t:"Combination Sum",d:"Medium",cos:["Amazon","Google"],lc:"combination-sum"},
      {id:80,t:"Combination Sum II",d:"Medium",cos:["Amazon"],lc:"combination-sum-ii"},
    ]},
    {name:"Permutations", desc:"All orderings of elements", qs:[
      {id:81,t:"Permutations",d:"Medium",cos:["Microsoft","Google"],lc:"permutations"},
      {id:82,t:"Permutations II",d:"Medium",cos:["Microsoft"],lc:"permutations-ii"},
    ]},
    {name:"Grid DFS", desc:"Matrix path exploration", qs:[
      {id:83,t:"Word Search",d:"Medium",cos:["Amazon","Microsoft"],lc:"word-search"},
    ]},
    {name:"Constraint Satisfaction", desc:"Hard constraint backtracking", qs:[
      {id:84,t:"N-Queens",d:"Hard",cos:["Google","Microsoft"],lc:"n-queens"},
      {id:85,t:"Sudoku Solver",d:"Hard",cos:["Google"],lc:"sudoku-solver"},
    ]},
  ]},
  {name:"Greedy", color:"#f5a623", patterns:[
    {name:"Interval Greedy", desc:"Sort then decide overlap/merge", qs:[
      {id:86,t:"Merge Intervals",d:"Medium",cos:["Google","Facebook","Amazon"],lc:"merge-intervals"},
      {id:87,t:"Non-overlapping Intervals",d:"Medium",cos:["Google"],lc:"non-overlapping-intervals"},
      {id:88,t:"Insert Interval",d:"Medium",cos:["Google","Facebook"],lc:"insert-interval"},
    ]},
    {name:"Local Optimal Greedy", desc:"Always pick best current choice", qs:[
      {id:89,t:"Jump Game",d:"Medium",cos:["Amazon","Microsoft"],lc:"jump-game"},
      {id:90,t:"Jump Game II",d:"Medium",cos:["Amazon"],lc:"jump-game-ii"},
      {id:91,t:"Gas Station",d:"Medium",cos:["Amazon"],lc:"gas-station"},
    ]},
  ]},
  {name:"Tries & Stacks", color:"#ff7eb3", patterns:[
    {name:"Trie", desc:"Prefix tree for string search", qs:[
      {id:92,t:"Implement Trie (Prefix Tree)",d:"Medium",cos:["Google","Amazon"],lc:"implement-trie-prefix-tree"},
      {id:93,t:"Design Add and Search Words",d:"Medium",cos:["Facebook"],lc:"design-add-and-search-words-data-structure"},
      {id:94,t:"Word Search II",d:"Hard",cos:["Google","Microsoft"],lc:"word-search-ii"},
    ]},
    {name:"Monotonic Stack", desc:"Next greater/smaller element", qs:[
      {id:95,t:"Daily Temperatures",d:"Medium",cos:["Amazon","Google"],lc:"daily-temperatures"},
      {id:96,t:"Largest Rectangle in Histogram",d:"Hard",cos:["Google","Amazon"],lc:"largest-rectangle-in-histogram"},
      {id:97,t:"Car Fleet",d:"Medium",cos:["Google"],lc:"car-fleet"},
    ]},
  ]},
];

const ALL_Q = TOPICS.flatMap(t => t.patterns.flatMap(p => p.qs.map(q => ({...q, topic:t.name, pattern:p.name, topicColor:t.color}))));
const COMPANIES = ["Google","Amazon","Microsoft","Meta","Facebook","Apple","Adobe","LinkedIn"];
const ROADMAP_ORDER = ["Arrays & Strings","Linked Lists","Binary Search","Trees","Heaps & Priority Queues","Graphs","Backtracking","Greedy","Dynamic Programming","Tries & Stacks"];

let solved = new Set(JSON.parse(localStorage.getItem('dsahub_solved')||'[]'));
let currentView = 'topic-pattern';
let activeCo = '';
let currentPage = 'questions';
let isDark = localStorage.getItem('dsahub_theme') !== 'light';

function saveSolved() { localStorage.setItem('dsahub_solved', JSON.stringify([...solved])); }

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'light');
  document.getElementById('theme-btn').textContent = isDark ? '☽' : '☀';
  localStorage.setItem('dsahub_theme', isDark ? 'dark' : 'light');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function initTheme() {
  if (!isDark) {
    document.documentElement.setAttribute('data-theme','light');
    document.getElementById('theme-btn').textContent = '☀';
  }
}

function goTo(page, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if(el) el.classList.add('active');
  currentPage = page;
  if(page === 'roadmap') renderRoadmap();
  if(page === 'companies') renderCompanies();
  if(page === 'stats') renderStats();
  document.getElementById('sidebar').classList.remove('open');
}

function setView(v, btn) {
  currentView = v;
  document.querySelectorAll('.vtab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderQuestions();
}

function matches(q) {
  const s = document.getElementById('srch').value.toLowerCase();
  const d = document.getElementById('diff-sel').value;
  const st = document.getElementById('status-sel').value;
  if (s && !q.t.toLowerCase().includes(s) && !(q.pattern||'').toLowerCase().includes(s)) return false;
  if (d && q.d !== d) return false;
  if (st === 'solved' && !solved.has(q.id)) return false;
  if (st === 'unsolved' && solved.has(q.id)) return false;
  if (activeCo && !(q.cos||[]).includes(activeCo)) return false;
  return true;
}

function toggleSolve(id, e) {
  e.stopPropagation();
  if (solved.has(id)) solved.delete(id); else solved.add(id);
  saveSolved();
  updateStats();
  render();
}

function updateStats() {
  const total = ALL_Q.length;
  const s = solved.size;
  document.getElementById('st-solved').textContent = s;
  document.getElementById('st-total').textContent = total;
  document.getElementById('st-prog').style.width = Math.round(s/total*100)+'%';
}

const LC_ICON = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`;

function qCard(q) {
  const isSolved = solved.has(q.id);
  const lcUrl = q.lc ? LC + q.lc + '/' : null;
  return `<div class="qrow${isSolved?' solved':''}">
    <span class="qidx">#${String(q.id).padStart(3,'0')}</span>
    <span class="qtitle">${q.t}</span>
    <div class="qtags">
      ${q.pattern ? `<span class="pat-tag">${q.pattern}</span>` : ''}
      ${(q.cos||[]).slice(0,2).map(c=>`<span class="co-tag">${c}</span>`).join('')}
      <span class="diff ${q.d}">${q.d}</span>
      ${lcUrl ? `<a class="lc-btn" href="${lcUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Open on LeetCode">${LC_ICON} LC</a>` : ''}
      <div class="chk${isSolved?' done':''}" onclick="toggleSolve(${q.id},event)">${isSolved?'✓':''}</div>
    </div>
  </div>`;
}

function renderTopicPattern() {
  let html = '';
  for (const topic of TOPICS) {
    const topicQs = topic.patterns.flatMap(p => p.qs).filter(matches);
    if (!topicQs.length) continue;
    const sv = topicQs.filter(q => solved.has(q.id)).length;
    const pct = Math.round(sv/topicQs.length*100);
    const patHtml = topic.patterns.map(pat => {
      const pqs = pat.qs.filter(matches);
      if (!pqs.length) return '';
      const psv = pqs.filter(q => solved.has(q.id)).length;
      return `<div class="pat-block">
        <div class="pat-hdr" onclick="togglePat(this)">
          <div class="pat-dot" style="background:${topic.color}"></div>
          <div class="pat-name-wrap">
            <span class="pat-name">${pat.name}</span>
            <span class="pat-desc">${pat.desc}</span>
          </div>
          <span class="pat-count">${psv}/${pqs.length}</span>
          <span class="pat-chevron open">▶</span>
        </div>
        <div class="pat-body visible">${pqs.map(q=>qCard({...q,pattern:undefined})).join('')}</div>
      </div>`;
    }).join('');
    html += `<div class="topic-block">
      <div class="topic-hdr open" onclick="toggleTopic(this)">
        <div class="t-color-bar" style="background:${topic.color}"></div>
        <span class="t-name">${topic.name}</span>
        <span class="t-patterns-count">${topic.patterns.length} patterns</span>
        <div class="t-progress">
          <div class="t-prog-bar"><div class="t-prog-fill" style="background:${topic.color};width:${pct}%"></div></div>
          <span class="t-prog-text">${sv}/${topicQs.length}</span>
        </div>
        <span class="t-chevron open">▶</span>
      </div>
      <div class="topic-body visible">${patHtml}</div>
    </div>`;
  }
  return html || '<div class="empty"><div class="empty-icon">◎</div>No questions match your filters.</div>';
}

function renderPatternOnly() {
  const grouped = {};
  for (const topic of TOPICS) {
    for (const pat of topic.patterns) {
      if (!grouped[pat.name]) grouped[pat.name] = {name:pat.name, desc:pat.desc, color:topic.color, qs:[]};
      grouped[pat.name].qs.push(...pat.qs);
    }
  }
  let html = '';
  for (const [name, p] of Object.entries(grouped)) {
    const pqs = p.qs.filter(matches);
    if (!pqs.length) continue;
    const sv = pqs.filter(q => solved.has(q.id)).length;
    html += `<div class="pat-only-block">
      <div class="pat-only-hdr" onclick="togglePatOnly(this)">
        <div class="t-color-bar" style="background:${p.color}"></div>
        <span class="pat-only-name">${name}</span>
        <span style="font-size:11px;color:var(--text3);margin-right:8px">${p.desc}</span>
        <span class="pat-only-meta">${sv}/${pqs.length}</span>
        <span class="pat-chevron open" style="margin-left:8px">▶</span>
      </div>
      <div class="pat-only-body visible">${pqs.map(q=>qCard({...q,pattern:undefined})).join('')}</div>
    </div>`;
  }
  return html || '<div class="empty"><div class="empty-icon">◎</div>No patterns match your filters.</div>';
}

function renderFlat() {
  const qs = ALL_Q.filter(matches);
  if (!qs.length) return '<div class="empty"><div class="empty-icon">◎</div>No questions match your filters.</div>';
  return `<div style="display:grid;gap:4px">${qs.map(q=>qCard(q)).join('')}</div>`;
}

function renderQuestions() {
  const c = document.getElementById('q-content');
  if (currentView === 'topic-pattern') c.innerHTML = renderTopicPattern();
  else if (currentView === 'pattern-only') c.innerHTML = renderPatternOnly();
  else c.innerHTML = renderFlat();
}

function renderRoadmap() {
  const c = document.getElementById('roadmap-content');
  c.innerHTML = ROADMAP_ORDER.map((name, i) => {
    const topic = TOPICS.find(t => t.name === name);
    if (!topic) return '';
    const allQs = topic.patterns.flatMap(p => p.qs);
    const sv = allQs.filter(q => solved.has(q.id)).length;
    const pct = Math.round(sv/allQs.length*100);
    return `<div class="rm-card" style="animation-delay:${i*0.05}s">
      <div class="rm-num">
        <div class="rm-step" style="background:${topic.color}">${i+1}</div>
        Step ${i+1}
      </div>
      <div class="rm-name">${name}</div>
      <div class="rm-patterns">${topic.patterns.map(p=>p.name).join(' · ')}</div>
      <div class="rm-prog-wrap">
        <div class="rm-prog-bar"><div class="rm-prog-fill" style="background:${topic.color};width:${pct}%"></div></div>
        <span class="rm-prog-pct">${pct}%</span>
      </div>
    </div>`;
  }).join('');
}

function renderCompanies() {
  const chipsEl = document.getElementById('co-chips');
  if (!chipsEl.innerHTML) {
    chipsEl.innerHTML = COMPANIES.map(c =>
      `<button class="co-chip" onclick="setCo('${c}',this)">${c}</button>`
    ).join('');
  }
  const grouped = {};
  for (const q of ALL_Q) {
    for (const co of (q.cos||[])) {
      if (!grouped[co]) grouped[co] = [];
      grouped[co].push(q);
    }
  }
  const companies = activeCo ? [activeCo] : COMPANIES;
  let html = '';
  for (const co of companies) {
    const cqs = (grouped[co]||[]).filter(q => {
      const s = document.getElementById('srch').value.toLowerCase();
      const d = document.getElementById('diff-sel').value;
      const st = document.getElementById('status-sel').value;
      if (s && !q.t.toLowerCase().includes(s)) return false;
      if (d && q.d !== d) return false;
      if (st === 'solved' && !solved.has(q.id)) return false;
      if (st === 'unsolved' && solved.has(q.id)) return false;
      return true;
    });
    if (!cqs.length) continue;
    const sv = cqs.filter(q => solved.has(q.id)).length;
    html += `<div class="pat-only-block">
      <div class="pat-only-hdr" onclick="togglePatOnly(this)">
        <span class="pat-only-name">${co}</span>
        <span class="pat-only-meta">${sv}/${cqs.length} solved</span>
        <span class="pat-chevron open" style="margin-left:8px">▶</span>
      </div>
      <div class="pat-only-body visible">${cqs.map(q=>qCard(q)).join('')}</div>
    </div>`;
  }
  document.getElementById('co-content').innerHTML = html || '<div class="empty"><div class="empty-icon">◎</div>Select a company above.</div>';
}

function setCo(co, btn) {
  activeCo = activeCo === co ? '' : co;
  document.querySelectorAll('.co-chip').forEach(b => b.classList.remove('active'));
  if (activeCo) btn.classList.add('active');
  renderCompanies();
}

function renderStats() {
  let html = '<div style="display:grid;gap:10px">';
  for (const topic of TOPICS) {
    const allQs = topic.patterns.flatMap(p => p.qs);
    const sv = allQs.filter(q => solved.has(q.id)).length;
    const pct = Math.round(sv/allQs.length*100);
    html += `<div class="pat-only-block">
      <div class="pat-only-hdr" style="cursor:default">
        <div class="t-color-bar" style="background:${topic.color}"></div>
        <span class="pat-only-name">${topic.name}</span>
        <div style="display:flex;align-items:center;gap:8px;margin-left:auto">
          <div style="width:120px;height:4px;background:var(--bg4);border-radius:2px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${topic.color};border-radius:2px"></div>
          </div>
          <span class="pat-only-meta">${sv}/${allQs.length} · ${pct}%</span>
        </div>
      </div>
      <div class="pat-only-body visible" style="padding:8px 12px">
        ${topic.patterns.map(p => {
          const psv = p.qs.filter(q=>solved.has(q.id)).length;
          const ppct = Math.round(psv/p.qs.length*100);
          return `<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border)">
            <span style="font-size:13px;color:var(--text2);flex:1">${p.name}</span>
            <div style="width:80px;height:3px;background:var(--bg4);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${ppct}%;background:${topic.color};border-radius:2px"></div>
            </div>
            <span style="font-size:11px;color:var(--text3);font-family:var(--font-mono);min-width:40px;text-align:right">${psv}/${p.qs.length}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }
  html += '</div>';
  document.getElementById('stats-content').innerHTML = html;
}

function toggleTopic(el) {
  const body = el.nextElementSibling;
  const chev = el.querySelector('.t-chevron');
  body.classList.toggle('visible');
  chev.classList.toggle('open');
  el.classList.toggle('open');
}

function togglePat(el) {
  const body = el.nextElementSibling;
  const chev = el.querySelector('.pat-chevron');
  body.classList.toggle('visible');
  chev.classList.toggle('open');
}

function togglePatOnly(el) {
  const body = el.nextElementSibling;
  const chev = el.querySelector('.pat-chevron');
  body.classList.toggle('visible');
  if(chev) chev.classList.toggle('open');
}

function render() {
  if (currentPage === 'questions') renderQuestions();
  if (currentPage === 'companies') renderCompanies();
  if (currentPage === 'stats') renderStats();
}

/* ── AI Integration ── */

function showAIResponse(text) {
  const el = document.getElementById('ai-response');
  // Basic markdown: bold, inline code, code blocks, line breaks
  let html = text
    .replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  el.innerHTML = html;
  el.style.display = 'block';
}

async function askAI(prompt) {
  const el = document.getElementById('ai-response');
  el.style.display = 'block';
  el.innerHTML = '<span class="ai-loading">Thinking...</span>';

  try {
    const response = await fetch('http://localhost:5000/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content || 'No response received.';
    showAIResponse(text);
  } catch (err) {
    el.innerHTML = '<span style="color:#f06060">Error: ' + err.message + '</span>';
  }
}

function sendAI() {
  const input = document.getElementById('ai-input');
  const prompt = input.value.trim();
  if (!prompt) return;
  input.value = '';
  askAI(prompt);
}

/* ── Init ── */
initTheme();
updateStats();
renderQuestions();

document.getElementById('ai-send').addEventListener('click', sendAI);
document.getElementById('ai-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') sendAI();
});