/* ==========================================================================
   ALWAYS FRESH TRADING (AFT) - APPLICATION LOGIC
   ========================================================================== */

// 1. PRODUCT CATALOG DATASET (Highly detailed B2B Sourcing Specs)
const PRODUCE_CATALOG = [
  {
    "id": "1101",
    "name": "Shanghai Bok Choy (Green Stem)",
    "zh": "青江菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Shanghai Bok Choy (Green Stem) (青江菜). Available for wholesale order."
  },
  {
    "id": "1101A",
    "name": "Baby Shanghai Bok Choy (Green Stem)",
    "zh": "青江菜苗",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Shanghai Bok Choy (Green Stem) (青江菜苗). Available for wholesale order."
  },
  {
    "id": "1102",
    "name": "Chinese Broccoli / Gai Lan",
    "zh": "芥蘭",
    "emoji": "🥦",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Broccoli / Gai Lan (芥蘭). Available for wholesale order."
  },
  {
    "id": "1102A",
    "name": "Baby Gai Lan / Gai Lan Miu",
    "zh": "芥蘭苗",
    "emoji": "🥦",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Gai Lan / Gai Lan Miu (芥蘭苗). Available for wholesale order."
  },
  {
    "id": "1103",
    "name": "Yu Choy",
    "zh": "油菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yu Choy (油菜). Available for wholesale order."
  },
  {
    "id": "1103A",
    "name": "Yu Choy Sum",
    "zh": "油菜心",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yu Choy Sum (油菜心). Available for wholesale order."
  },
  {
    "id": "1103B",
    "name": "Baby Yu Choy",
    "zh": "油菜苗",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Yu Choy (油菜苗). Available for wholesale order."
  },
  {
    "id": "1104",
    "name": "Big Gai Choy",
    "zh": "大芥菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Big Gai Choy (大芥菜). Available for wholesale order."
  },
  {
    "id": "1104A",
    "name": "Small Gai Choy",
    "zh": "小芥菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Small Gai Choy (小芥菜). Available for wholesale order."
  },
  {
    "id": "1105",
    "name": "She Li Hon",
    "zh": "雪里紅",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "She Li Hon (雪里紅). Available for wholesale order."
  },
  {
    "id": "1105A",
    "name": "Baby She Li Hon",
    "zh": "雪里紅苗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby She Li Hon (雪里紅苗). Available for wholesale order."
  },
  {
    "id": "1106",
    "name": "Long Bok Choy (White Stem)",
    "zh": "長腳白菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Long Bok Choy (White Stem) (長腳白菜). Available for wholesale order."
  },
  {
    "id": "1107",
    "name": "Short Bok Choy (White Stem)",
    "zh": "矮腳白菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Short Bok Choy (White Stem) (矮腳白菜). Available for wholesale order."
  },
  {
    "id": "1107A",
    "name": "Baby Short Bok Choy (White Stem)",
    "zh": "小白苗/奶油苗",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Short Bok Choy (White Stem) (小白苗/奶油苗). Available for wholesale order."
  },
  {
    "id": "1108",
    "name": "Taiwan Bok Choy",
    "zh": "臺灣白菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Taiwan Bok Choy (臺灣白菜). Available for wholesale order."
  },
  {
    "id": "1108A",
    "name": "Sweet Bok Choy",
    "zh": "甜白菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sweet Bok Choy (甜白菜). Available for wholesale order."
  },
  {
    "id": "1109K",
    "name": "Pea Tip Large / King",
    "zh": "大豆苗皇",
    "emoji": "🥦",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pea Tip Large / King (大豆苗皇). Available for wholesale order."
  },
  {
    "id": "1110",
    "name": "A-Choy / Taiwan Lettuce",
    "zh": "萵仔菜/A菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "A-Choy / Taiwan Lettuce (萵仔菜/A菜). Available for wholesale order."
  },
  {
    "id": "1110A",
    "name": "Stems A-Choy / A-Choy Sum",
    "zh": "萵苣/A菜心",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "Mexico",
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Stems A-Choy / A-Choy Sum (萵苣/A菜心). Available for wholesale order."
  },
  {
    "id": "1111",
    "name": "Ta Ku Choy",
    "zh": "塔棵菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Ta Ku Choy (塔棵菜). Available for wholesale order."
  },
  {
    "id": "1112S",
    "name": "Small Tong Ho",
    "zh": "小茼蒿散裝",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Small Tong Ho (小茼蒿散裝). Available for wholesale order."
  },
  {
    "id": "1113",
    "name": "Taiwan Spinach (with Roots)",
    "zh": "臺灣菠菜",
    "emoji": "🥦",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Taiwan Spinach (with Roots) (臺灣菠菜). Available for wholesale order."
  },
  {
    "id": "1114",
    "name": "Ying Choy / Chinese Hollow Greens",
    "zh": "空心菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Ying Choy / Chinese Hollow Greens (空心菜). Available for wholesale order."
  },
  {
    "id": "1114A",
    "name": "Baby Ying Choy",
    "zh": "空心菜苗",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Ying Choy (空心菜苗). Available for wholesale order."
  },
  {
    "id": "1114B",
    "name": "White Ying Choy",
    "zh": "白空心菜/水通",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "White Ying Choy (白空心菜/水通). Available for wholesale order."
  },
  {
    "id": "1115",
    "name": "Red Shen Choy / Red Hon Choy",
    "zh": "紅莧菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "California",
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Shen Choy / Red Hon Choy (紅莧菜). Available for wholesale order."
  },
  {
    "id": "1115A",
    "name": "Baby Red Shen Choy (Loose)",
    "zh": "紅莧菜苗",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Red Shen Choy (Loose) (紅莧菜苗). Available for wholesale order."
  },
  {
    "id": "1115AA",
    "name": "Baby Red Shen Choy (Bagged)",
    "zh": "紅莧菜苗",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Red Shen Choy (Bagged) (紅莧菜苗). Available for wholesale order."
  },
  {
    "id": "1115B",
    "name": "Baby Green Shen Choy",
    "zh": "綠莧菜苗",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Green Shen Choy (綠莧菜苗). Available for wholesale order."
  },
  {
    "id": "1116",
    "name": "Mong Toi / San Choy",
    "zh": "皇宮菜/潺菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mong Toi / San Choy (皇宮菜/潺菜). Available for wholesale order."
  },
  {
    "id": "1117",
    "name": "Yam Leaves",
    "zh": "番薯葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yam Leaves (番薯葉). Available for wholesale order."
  },
  {
    "id": "1118",
    "name": "Green Nira / Chives",
    "zh": "韭菜",
    "emoji": "🥦",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Nira / Chives (韭菜). Available for wholesale order."
  },
  {
    "id": "1118B",
    "name": "Nira Flower",
    "zh": "韭菜花",
    "emoji": "🥦",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Nira Flower (韭菜花). Available for wholesale order."
  },
  {
    "id": "1118C",
    "name": "Yellow Nira / Yellow Chive",
    "zh": "韭黃",
    "emoji": "🥦",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Nira / Yellow Chive (韭黃). Available for wholesale order."
  },
  {
    "id": "1120",
    "name": "Chinese Celery (Green Stem)",
    "zh": "綠唐芹",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "California",
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Celery (Green Stem) (綠唐芹). Available for wholesale order."
  },
  {
    "id": "1121A",
    "name": "Chinese Leek",
    "zh": "中國蒜苗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Leek (中國蒜苗). Available for wholesale order."
  },
  {
    "id": "1123",
    "name": "Taiwanese Cabbage (Flat)",
    "zh": "臺灣高麗菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Taiwanese Cabbage (Flat) (臺灣高麗菜). Available for wholesale order."
  },
  {
    "id": "1124",
    "name": "Long Napa",
    "zh": "長紹菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Long Napa (長紹菜). Available for wholesale order."
  },
  {
    "id": "1125",
    "name": "Korean Napa (Green Leaves)",
    "zh": "韓國白菜/紹菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Napa (Green Leaves) (韓國白菜/紹菜). Available for wholesale order."
  },
  {
    "id": "1126",
    "name": "Short Napa (White Leaves)",
    "zh": "中國白菜/紹菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Short Napa (White Leaves) (中國白菜/紹菜). Available for wholesale order."
  },
  {
    "id": "1126A",
    "name": "Baby Napa / Wawa Choy",
    "zh": "娃娃菜/小紹菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Napa / Wawa Choy (娃娃菜/小紹菜). Available for wholesale order."
  },
  {
    "id": "1127",
    "name": "Pandan Leaf",
    "zh": "青香葉/香蘭草",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pandan Leaf (青香葉/香蘭草). Available for wholesale order."
  },
  {
    "id": "1128CN",
    "name": "Can Nuoc / Vietnamese Celery",
    "zh": "越南香芹/上海",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Can Nuoc / Vietnamese Celery (越南香芹/上海). Available for wholesale order."
  },
  {
    "id": "1128NG",
    "name": "Ngo Gai / Culantro",
    "zh": "刺香葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Ngo Gai / Culantro (刺香葉). Available for wholesale order."
  },
  {
    "id": "1128NM",
    "name": "Ngo Om / Rice Paddy Herb",
    "zh": "磨翁草",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Ngo Om / Rice Paddy Herb (磨翁草). Available for wholesale order."
  },
  {
    "id": "1128RD",
    "name": "Rau Dang / Bitter Leaf",
    "zh": "苦菜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rau Dang / Bitter Leaf (苦菜). Available for wholesale order."
  },
  {
    "id": "1128RM",
    "name": "Rau Ma / Pennywort Leaf",
    "zh": "彭大海/彭大碗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rau Ma / Pennywort Leaf (彭大海/彭大碗). Available for wholesale order."
  },
  {
    "id": "1129DA",
    "name": "Dapca / Fish Mint",
    "zh": "魚腥草",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Dapca / Fish Mint (魚腥草). Available for wholesale order."
  },
  {
    "id": "1129HC",
    "name": "Hung Cay",
    "zh": "辣薄荷",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Hung Cay (辣薄荷). Available for wholesale order."
  },
  {
    "id": "1129KG",
    "name": "Kinh Gioi",
    "zh": "綠紫蘇",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kinh Gioi (綠紫蘇). Available for wholesale order."
  },
  {
    "id": "1129RR",
    "name": "Rau Ram / La Ksa Leaf",
    "zh": "叻沙葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rau Ram / La Ksa Leaf (叻沙葉). Available for wholesale order."
  },
  {
    "id": "1129TH",
    "name": "Thom / Mint",
    "zh": "薄荷",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Thom / Mint (薄荷). Available for wholesale order."
  },
  {
    "id": "1129TT",
    "name": "Tia To / Vietnamese Perilla",
    "zh": "紫蘇",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Tia To / Vietnamese Perilla (紫蘇). Available for wholesale order."
  },
  {
    "id": "1130",
    "name": "Chinese Eggplant",
    "zh": "中國茄子",
    "emoji": "🍆",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Eggplant (中國茄子). Available for wholesale order."
  },
  {
    "id": "1130G",
    "name": "Thai Green Eggplant",
    "zh": "泰國綠茄子",
    "emoji": "🍆",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Thai Green Eggplant (泰國綠茄子). Available for wholesale order."
  },
  {
    "id": "1130J",
    "name": "Japanese Eggplant",
    "zh": "日本茄子",
    "emoji": "🍆",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Japanese Eggplant (日本茄子). Available for wholesale order."
  },
  {
    "id": "1130N",
    "name": "Indian Eggplant",
    "zh": "印度茄子",
    "emoji": "🍆",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Indian Eggplant (印度茄子). Available for wholesale order."
  },
  {
    "id": "1130NG",
    "name": "Graffiti Eggplant",
    "zh": "印度花茄子",
    "emoji": "🍆",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Graffiti Eggplant (印度花茄子). Available for wholesale order."
  },
  {
    "id": "1130P",
    "name": "Filipino Eggplant",
    "zh": "菲律賓茄子",
    "emoji": "🍆",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Filipino Eggplant (菲律賓茄子). Available for wholesale order."
  },
  {
    "id": "1131",
    "name": "Bitter Melon",
    "zh": "綠苦瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bitter Melon (綠苦瓜). Available for wholesale order."
  },
  {
    "id": "1131N",
    "name": "Indian Bitter Melon / Karela",
    "zh": "印度苦瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Indian Bitter Melon / Karela (印度苦瓜). Available for wholesale order."
  },
  {
    "id": "1132",
    "name": "Opo / Long Squash",
    "zh": "蒲瓜",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Opo / Long Squash (蒲瓜). Available for wholesale order."
  },
  {
    "id": "1132A",
    "name": "Round Opo / Indian Opo",
    "zh": "圓蒲瓜/印度蒲",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Round Opo / Indian Opo (圓蒲瓜/印度蒲). Available for wholesale order."
  },
  {
    "id": "1132D",
    "name": "Bengali Squash / Bottle Gourd",
    "zh": "葫蘆瓜",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bengali Squash / Bottle Gourd (葫蘆瓜). Available for wholesale order."
  },
  {
    "id": "1132E",
    "name": "Snake Gourd",
    "zh": "蛇瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Snake Gourd (蛇瓜). Available for wholesale order."
  },
  {
    "id": "1132F",
    "name": "Dosakai / Indian Round Cucumber",
    "zh": "印度圓黃瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Dosakai / Indian Round Cucumber (印度圓黃瓜). Available for wholesale order."
  },
  {
    "id": "1133",
    "name": "Chinese Okra / Singkwo",
    "zh": "廣東絲瓜/勝瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Okra / Singkwo (廣東絲瓜/勝瓜). Available for wholesale order."
  },
  {
    "id": "1134",
    "name": "Moap / Taiwan Singkwo",
    "zh": "臺灣絲瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Moap / Taiwan Singkwo (臺灣絲瓜). Available for wholesale order."
  },
  {
    "id": "1135",
    "name": "Fuzzy Squash / Mao Gua",
    "zh": "毛瓜",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fuzzy Squash / Mao Gua (毛瓜). Available for wholesale order."
  },
  {
    "id": "1136",
    "name": "Round Winter Melon",
    "zh": "圓冬瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Round Winter Melon (圓冬瓜). Available for wholesale order."
  },
  {
    "id": "1137",
    "name": "Kabocha",
    "zh": "日本南瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kabocha (日本南瓜). Available for wholesale order."
  },
  {
    "id": "1137B",
    "name": "Fairytale Squash",
    "zh": "童話南瓜",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fairytale Squash (童話南瓜). Available for wholesale order."
  },
  {
    "id": "1137C",
    "name": "Mini Kabocha / Beibei Pumpkin",
    "zh": "貝貝南瓜",
    "emoji": "🥦",
    "category": "seasonal",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mini Kabocha / Beibei Pumpkin (貝貝南瓜). Available for wholesale order."
  },
  {
    "id": "1138",
    "name": "Japanese Yam / Sweet Potato (Large)",
    "zh": "日本甜薯(大)",
    "emoji": "🥔",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Japanese Yam / Sweet Potato (Large) (日本甜薯(大)). Available for wholesale order."
  },
  {
    "id": "1138A",
    "name": "Japanese Yam / Sweet Potato (Medium)",
    "zh": "日本甜薯(中)",
    "emoji": "🥔",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Japanese Yam / Sweet Potato (Medium) (日本甜薯(中)). Available for wholesale order."
  },
  {
    "id": "1138D",
    "name": "Japanese Yam / Sweet Potato (Commercial)",
    "zh": "日本甜薯(餐館)",
    "emoji": "🥔",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Japanese Yam / Sweet Potato (Commercial) (日本甜薯(餐館)). Available for wholesale order."
  },
  {
    "id": "1139",
    "name": "Malanga Lila (Pink Inside)",
    "zh": "粉心大長芋",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Malanga Lila (Pink Inside) (粉心大長芋). Available for wholesale order."
  },
  {
    "id": "1140",
    "name": "Malanga Blanca (White Inside)",
    "zh": "白心大長芋",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Malanga Blanca (White Inside) (白心大長芋). Available for wholesale order."
  },
  {
    "id": "1141",
    "name": "Name Yam",
    "zh": "大薯",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Name Yam (大薯). Available for wholesale order."
  },
  {
    "id": "1141A",
    "name": "Yampi Root",
    "zh": "黑金剛木薯",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yampi Root (黑金剛木薯). Available for wholesale order."
  },
  {
    "id": "1142",
    "name": "Hawaii Purple Yam / Okinawa",
    "zh": "紫心蕃薯(夏威)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Hawaii Purple Yam / Okinawa (紫心蕃薯(夏威)). Available for wholesale order."
  },
  {
    "id": "1142A",
    "name": "California Purple Yam",
    "zh": "加州紫蕃薯",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "California Purple Yam (加州紫蕃薯). Available for wholesale order."
  },
  {
    "id": "1142C",
    "name": "American Garnet Red Yam",
    "zh": "紅蕃薯/紅地瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Garnet Red Yam (紅蕃薯/紅地瓜). Available for wholesale order."
  },
  {
    "id": "1142D",
    "name": "American Golden Yam",
    "zh": "黃金蕃薯/黃地",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Golden Yam (黃金蕃薯/黃地). Available for wholesale order."
  },
  {
    "id": "1143",
    "name": "Chinese Lobok (White Radish)",
    "zh": "中國白蘿蔔",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Lobok (White Radish) (中國白蘿蔔). Available for wholesale order."
  },
  {
    "id": "1143A",
    "name": "Japanese Daikon",
    "zh": "日本蘿蔔",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Japanese Daikon (日本蘿蔔). Available for wholesale order."
  },
  {
    "id": "1144",
    "name": "Korean Lobok",
    "zh": "韓國青蘿蔔",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Lobok (韓國青蘿蔔). Available for wholesale order."
  },
  {
    "id": "1145",
    "name": "Green Daikon",
    "zh": "綠蘿蔔",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Daikon (綠蘿蔔). Available for wholesale order."
  },
  {
    "id": "1146",
    "name": "Kohlrabi",
    "zh": "大頭菜瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kohlrabi (大頭菜瓜). Available for wholesale order."
  },
  {
    "id": "1147A",
    "name": "Lotus Root (Fresh)",
    "zh": "新鮮蓮藕",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Lotus Root (Fresh) (新鮮蓮藕). Available for wholesale order."
  },
  {
    "id": "1147B",
    "name": "Lotus Root (Fresh)",
    "zh": "新鮮蓮藕",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Lotus Root (Fresh) (新鮮蓮藕). Available for wholesale order."
  },
  {
    "id": "1148L",
    "name": "Big Taro Root / Malanga Coco",
    "zh": "大芋頭",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Big Taro Root / Malanga Coco (大芋頭). Available for wholesale order."
  },
  {
    "id": "1148S-A",
    "name": "Small Taro Root",
    "zh": "中國小芋頭",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Small Taro Root (中國小芋頭). Available for wholesale order."
  },
  {
    "id": "1148S-B",
    "name": "Small Taro Root / Eddoes",
    "zh": "南美洲小芋頭",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Ecuador"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Small Taro Root / Eddoes (南美洲小芋頭). Available for wholesale order."
  },
  {
    "id": "1149",
    "name": "Peeled Taro Root",
    "zh": "去皮芋頭",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Peeled Taro Root (去皮芋頭). Available for wholesale order."
  },
  {
    "id": "1151",
    "name": "Water Chestnut",
    "zh": "馬蹄/荸薺",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Water Chestnut (馬蹄/荸薺). Available for wholesale order."
  },
  {
    "id": "1154",
    "name": "Fresh Bamboo",
    "zh": "新鮮竹筍",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Bamboo (新鮮竹筍). Available for wholesale order."
  },
  {
    "id": "1155",
    "name": "Gobo",
    "zh": "牛蒡",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Gobo (牛蒡). Available for wholesale order."
  },
  {
    "id": "1156",
    "name": "Naga Imo",
    "zh": "日本山藥",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Japan"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Naga Imo (日本山藥). Available for wholesale order."
  },
  {
    "id": "1156B",
    "name": "Iron Bar Naga Imo",
    "zh": "中國鐵棍山藥",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Iron Bar Naga Imo (中國鐵棍山藥). Available for wholesale order."
  },
  {
    "id": "1157A",
    "name": "Fresh Lily Bulb",
    "zh": "新鮮百合",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Lily Bulb (新鮮百合). Available for wholesale order."
  },
  {
    "id": "1159",
    "name": "Long Bean Green",
    "zh": "綠長豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Long Bean Green (綠長豆). Available for wholesale order."
  },
  {
    "id": "1159A",
    "name": "White Long Bean",
    "zh": "白長豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "White Long Bean (白長豆). Available for wholesale order."
  },
  {
    "id": "1160",
    "name": "Shallot (Small)",
    "zh": "中國紅蔥頭",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Shallot (Small) (中國紅蔥頭). Available for wholesale order."
  },
  {
    "id": "1160A",
    "name": "USA Shallot (Medium-Large)",
    "zh": "美國紅蔥頭(大)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "USA Shallot (Medium-Large) (美國紅蔥頭(大)). Available for wholesale order."
  },
  {
    "id": "1160B",
    "name": "USA Shallot (Small bagged)",
    "zh": "美國紅蔥頭(小)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "USA Shallot (Small bagged) (美國紅蔥頭(小)). Available for wholesale order."
  },
  {
    "id": "1160C",
    "name": "USA Shallot (Loose)",
    "zh": "美國紅蔥頭(散)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "USA Shallot (Loose) (美國紅蔥頭(散)). Available for wholesale order."
  },
  {
    "id": "1161",
    "name": "Chinese Ginger",
    "zh": "老薑",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Ginger (老薑). Available for wholesale order."
  },
  {
    "id": "1161A",
    "name": "Young Ginger",
    "zh": "嫩薑",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Brazil"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Young Ginger (嫩薑). Available for wholesale order."
  },
  {
    "id": "1162",
    "name": "Galanga",
    "zh": "南薑",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Galanga (南薑). Available for wholesale order."
  },
  {
    "id": "1162A",
    "name": "Yellow Turmeric (per lb)",
    "zh": "黃薑",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Turmeric (per lb) (黃薑). Available for wholesale order."
  },
  {
    "id": "1162AA",
    "name": "Yellow Turmeric (per box/bag)",
    "zh": "黃薑(整箱/袋)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Fiji"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Turmeric (per box/bag) (黃薑(整箱/袋)). Available for wholesale order."
  },
  {
    "id": "1162B",
    "name": "Sunchokes / Jerusalem Artichokes",
    "zh": "新鮮苻苓",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sunchokes / Jerusalem Artichokes (新鮮苻苓). Available for wholesale order."
  },
  {
    "id": "1163A",
    "name": "Garlic (Loose)",
    "zh": "大蒜散裝",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Garlic (Loose) (大蒜散裝). Available for wholesale order."
  },
  {
    "id": "1163B",
    "name": "Garlic (Pack of 5)",
    "zh": "大蒜五粒裝",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Garlic (Pack of 5) (大蒜五粒裝). Available for wholesale order."
  },
  {
    "id": "1163D",
    "name": "Garlic Peeled (Bagged)",
    "zh": "去皮大蒜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Garlic Peeled (Bagged) (去皮大蒜). Available for wholesale order."
  },
  {
    "id": "1164",
    "name": "Green Papaya",
    "zh": "青木瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Papaya (青木瓜). Available for wholesale order."
  },
  {
    "id": "1164B",
    "name": "Banana Flower",
    "zh": "香蕉花",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banana Flower (香蕉花). Available for wholesale order."
  },
  {
    "id": "1165",
    "name": "Green Mango",
    "zh": "青芒果",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Mango (青芒果). Available for wholesale order."
  },
  {
    "id": "1166",
    "name": "Raw Peanut (in shell, dry)",
    "zh": "帶殼花生(乾)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Raw Peanut (in shell, dry) (帶殼花生(乾)). Available for wholesale order."
  },
  {
    "id": "1166A",
    "name": "Fresh Peanut (in shell, moist)",
    "zh": "新鮮帶殼花生",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Peanut (in shell, moist) (新鮮帶殼花生). Available for wholesale order."
  },
  {
    "id": "1166C",
    "name": "Fresh Almond (in shell)",
    "zh": "新鮮帶殼杏仁",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Almond (in shell) (新鮮帶殼杏仁). Available for wholesale order."
  },
  {
    "id": "1167",
    "name": "Radish Sprout / Kaiware",
    "zh": "日本小豆苗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Radish Sprout / Kaiware (日本小豆苗). Available for wholesale order."
  },
  {
    "id": "1167B",
    "name": "Pea Sprouts",
    "zh": "小豆苗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pea Sprouts (小豆苗). Available for wholesale order."
  },
  {
    "id": "1167C",
    "name": "Radishoots",
    "zh": "日本小豆苗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Radishoots (日本小豆苗). Available for wholesale order."
  },
  {
    "id": "1168",
    "name": "Mung Bean Sprout",
    "zh": "綠豆芽",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mung Bean Sprout (綠豆芽). Available for wholesale order."
  },
  {
    "id": "1169",
    "name": "Soy Bean Sprout",
    "zh": "黃豆芽",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Soy Bean Sprout (黃豆芽). Available for wholesale order."
  },
  {
    "id": "1170",
    "name": "Finger Potato Mixed",
    "zh": "小土豆-混合",
    "emoji": "🥔",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Finger Potato Mixed (小土豆-混合). Available for wholesale order."
  },
  {
    "id": "1170A",
    "name": "Potato White",
    "zh": "白皮土豆",
    "emoji": "🥔",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Potato White (白皮土豆). Available for wholesale order."
  },
  {
    "id": "1170B",
    "name": "Potato Red",
    "zh": "紅皮土豆",
    "emoji": "🥔",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Potato Red (紅皮土豆). Available for wholesale order."
  },
  {
    "id": "1170C",
    "name": "Potato Russet",
    "zh": "棕皮土豆",
    "emoji": "🥔",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Potato Russet (棕皮土豆). Available for wholesale order."
  },
  {
    "id": "1172A",
    "name": "American Spinach (Clipped)",
    "zh": "美國菠菜",
    "emoji": "🥦",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Spinach (Clipped) (美國菠菜). Available for wholesale order."
  },
  {
    "id": "1173",
    "name": "Watercress",
    "zh": "西洋菜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Watercress (西洋菜). Available for wholesale order."
  },
  {
    "id": "1174",
    "name": "American Celery",
    "zh": "西洋芹菜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Celery (西洋芹菜). Available for wholesale order."
  },
  {
    "id": "1175",
    "name": "Romaine Lettuce",
    "zh": "羅曼生菜",
    "emoji": "🥬",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Romaine Lettuce (羅曼生菜). Available for wholesale order."
  },
  {
    "id": "1175A",
    "name": "Green Leaf Lettuce",
    "zh": "綠葉生菜",
    "emoji": "🥬",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Leaf Lettuce (綠葉生菜). Available for wholesale order."
  },
  {
    "id": "1175B",
    "name": "Red Leaf Lettuce",
    "zh": "紅葉生菜",
    "emoji": "🥬",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Leaf Lettuce (紅葉生菜). Available for wholesale order."
  },
  {
    "id": "1175E",
    "name": "Living Butter Lettuce (Clam Shell)",
    "zh": "奶油生菜(盒裝)",
    "emoji": "🥬",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Living Butter Lettuce (Clam Shell) (奶油生菜(盒裝)). Available for wholesale order."
  },
  {
    "id": "1175F",
    "name": "Romaine Hearts",
    "zh": "羅曼生菜心",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Romaine Hearts (羅曼生菜心). Available for wholesale order."
  },
  {
    "id": "1175G",
    "name": "Green Dandelion",
    "zh": "綠蒲公英葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Dandelion (綠蒲公英葉). Available for wholesale order."
  },
  {
    "id": "1176",
    "name": "American Cabbage Green",
    "zh": "綠高麗菜(中)",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Cabbage Green (綠高麗菜(中)). Available for wholesale order."
  },
  {
    "id": "1176A",
    "name": "Jumbo American Cabbage Green",
    "zh": "綠高麗菜(大)",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Jumbo American Cabbage Green (綠高麗菜(大)). Available for wholesale order."
  },
  {
    "id": "1176B",
    "name": "American Red Cabbage",
    "zh": "紫高麗菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Red Cabbage (紫高麗菜). Available for wholesale order."
  },
  {
    "id": "1177A",
    "name": "Cauliflower",
    "zh": "白花椰菜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cauliflower (白花椰菜). Available for wholesale order."
  },
  {
    "id": "1177C",
    "name": "Chinese Cauliflower / Tai Shan",
    "zh": "臺山白花椰菜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Cauliflower / Tai Shan (臺山白花椰菜). Available for wholesale order."
  },
  {
    "id": "1178",
    "name": "American Broccoli Crown",
    "zh": "無莖西蘭花",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Broccoli Crown (無莖西蘭花). Available for wholesale order."
  },
  {
    "id": "1179A",
    "name": "Green Chard",
    "zh": "綠佳茉葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Chard (綠佳茉葉). Available for wholesale order."
  },
  {
    "id": "1179B",
    "name": "Red Chard",
    "zh": "紅佳茉葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Chard (紅佳茉葉). Available for wholesale order."
  },
  {
    "id": "1179C",
    "name": "Kale Green",
    "zh": "羽衣甘藍",
    "emoji": "🥦",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kale Green (羽衣甘藍). Available for wholesale order."
  },
  {
    "id": "1179CA",
    "name": "Black Kale",
    "zh": "恐龍羽衣甘藍",
    "emoji": "🥦",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Black Kale (恐龍羽衣甘藍). Available for wholesale order."
  },
  {
    "id": "1179D",
    "name": "Mustard Green",
    "zh": "美國芥菜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mustard Green (美國芥菜). Available for wholesale order."
  },
  {
    "id": "1179E",
    "name": "Iceberg Lettuce (Cello Wrapped)",
    "zh": "美國生菜(包裝)",
    "emoji": "🥬",
    "category": "greens",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Iceberg Lettuce (Cello Wrapped) (美國生菜(包裝)). Available for wholesale order."
  },
  {
    "id": "1179G",
    "name": "Turnip Green",
    "zh": "蕪菁葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Turnip Green (蕪菁葉). Available for wholesale order."
  },
  {
    "id": "1179H",
    "name": "Collard Green",
    "zh": "寬葉捲心甘藍",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Collard Green (寬葉捲心甘藍). Available for wholesale order."
  },
  {
    "id": "1180A",
    "name": "Bell Pepper Green",
    "zh": "青椒",
    "emoji": "🫑",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bell Pepper Green (青椒). Available for wholesale order."
  },
  {
    "id": "1180B",
    "name": "Bell Pepper Red",
    "zh": "紅椒",
    "emoji": "🫑",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bell Pepper Red (紅椒). Available for wholesale order."
  },
  {
    "id": "1180C",
    "name": "Bell Pepper Yellow",
    "zh": "黃椒",
    "emoji": "🫑",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bell Pepper Yellow (黃椒). Available for wholesale order."
  },
  {
    "id": "1180D",
    "name": "Bell Pepper Orange",
    "zh": "橘椒",
    "emoji": "🫑",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bell Pepper Orange (橘椒). Available for wholesale order."
  },
  {
    "id": "1180E",
    "name": "Mini Sweet Pepper (Mixed)",
    "zh": "綜合小甜椒",
    "emoji": "🫑",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mini Sweet Pepper (Mixed) (綜合小甜椒). Available for wholesale order."
  },
  {
    "id": "1182B",
    "name": "American Green Onion",
    "zh": "美國青蔥(中)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Green Onion (美國青蔥(中)). Available for wholesale order."
  },
  {
    "id": "1182E",
    "name": "Korean Jumbo Green Onion / Daepa",
    "zh": "韓國大蔥/山東",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Jumbo Green Onion / Daepa (韓國大蔥/山東). Available for wholesale order."
  },
  {
    "id": "1182F",
    "name": "Japanese Green Onion / Tokyo Negi",
    "zh": "日本大蔥",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Japanese Green Onion / Tokyo Negi (日本大蔥). Available for wholesale order."
  },
  {
    "id": "1183AA",
    "name": "Onion Yellow (Jumbo)",
    "zh": "黃洋蔥(大)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Onion Yellow (Jumbo) (黃洋蔥(大)). Available for wholesale order."
  },
  {
    "id": "1183AB",
    "name": "Onion Yellow (Medium)",
    "zh": "黃洋蔥(中)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Onion Yellow (Medium) (黃洋蔥(中)). Available for wholesale order."
  },
  {
    "id": "1183AC",
    "name": "Onion Yellow (Bagged)",
    "zh": "黃洋蔥(小袋裝)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Onion Yellow (Bagged) (黃洋蔥(小袋裝)). Available for wholesale order."
  },
  {
    "id": "1183B",
    "name": "Onion Red (Jumbo)",
    "zh": "紅洋蔥(大)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Onion Red (Jumbo) (紅洋蔥(大)). Available for wholesale order."
  },
  {
    "id": "1183BB",
    "name": "Onion Red (Medium)",
    "zh": "紅洋蔥(中)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Onion Red (Medium) (紅洋蔥(中)). Available for wholesale order."
  },
  {
    "id": "1183BC",
    "name": "Onion Red (Bagged)",
    "zh": "紅洋蔥(小袋裝)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Onion Red (Bagged) (紅洋蔥(小袋裝)). Available for wholesale order."
  },
  {
    "id": "1183C",
    "name": "Onion White (Jumbo)",
    "zh": "白洋蔥(大)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Onion White (Jumbo) (白洋蔥(大)). Available for wholesale order."
  },
  {
    "id": "1183CB",
    "name": "Onion White (Medium)",
    "zh": "白洋蔥(中)",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Onion White (Medium) (白洋蔥(中)). Available for wholesale order."
  },
  {
    "id": "1183D",
    "name": "Pearl Onion Red",
    "zh": "珍珠小紅蔥",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pearl Onion Red (珍珠小紅蔥). Available for wholesale order."
  },
  {
    "id": "1183E",
    "name": "Pearl Onion Gold",
    "zh": "珍珠小黃蔥",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pearl Onion Gold (珍珠小黃蔥). Available for wholesale order."
  },
  {
    "id": "1183F",
    "name": "Pearl Onion White",
    "zh": "珍珠小白蔥",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pearl Onion White (珍珠小白蔥). Available for wholesale order."
  },
  {
    "id": "1184",
    "name": "Cilantro",
    "zh": "香菜/芫荽",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cilantro (香菜/芫荽). Available for wholesale order."
  },
  {
    "id": "1185",
    "name": "Curly Parsley",
    "zh": "捲葉巴西利",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Curly Parsley (捲葉巴西利). Available for wholesale order."
  },
  {
    "id": "1185A",
    "name": "Italian Parsley",
    "zh": "義大利巴西利",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Italian Parsley (義大利巴西利). Available for wholesale order."
  },
  {
    "id": "1187",
    "name": "Dill",
    "zh": "茴香",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Dill (茴香). Available for wholesale order."
  },
  {
    "id": "1188",
    "name": "Green Bean",
    "zh": "四季豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Bean (四季豆). Available for wholesale order."
  },
  {
    "id": "1188B",
    "name": "Romano Bean / Flat Long Bean",
    "zh": "義大利長扁豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Romano Bean / Flat Long Bean (義大利長扁豆). Available for wholesale order."
  },
  {
    "id": "1188G",
    "name": "Sour Grape",
    "zh": "生葡萄",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sour Grape (生葡萄). Available for wholesale order."
  },
  {
    "id": "1189",
    "name": "Sugar Snap Peas",
    "zh": "甜豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sugar Snap Peas (甜豆). Available for wholesale order."
  },
  {
    "id": "1190",
    "name": "Snow Peas",
    "zh": "雪豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Snow Peas (雪豆). Available for wholesale order."
  },
  {
    "id": "1191",
    "name": "Italian Eggplant",
    "zh": "義大利茄子",
    "emoji": "🍆",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Italian Eggplant (義大利茄子). Available for wholesale order."
  },
  {
    "id": "1191A",
    "name": "American Eggplant",
    "zh": "美國茄子",
    "emoji": "🍆",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Eggplant (美國茄子). Available for wholesale order."
  },
  {
    "id": "1192",
    "name": "Cucumber Plain",
    "zh": "美國黃瓜(綜合)",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cucumber Plain (美國黃瓜(綜合)). Available for wholesale order."
  },
  {
    "id": "1192A",
    "name": "Cucumber Large",
    "zh": "美國黃瓜(大)",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cucumber Large (美國黃瓜(大)). Available for wholesale order."
  },
  {
    "id": "1192C",
    "name": "Chinese Cucumber",
    "zh": "中國刺黃瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Cucumber (中國刺黃瓜). Available for wholesale order."
  },
  {
    "id": "1192E",
    "name": "English Cucumber",
    "zh": "英國黃瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "English Cucumber (英國黃瓜). Available for wholesale order."
  },
  {
    "id": "1192K",
    "name": "Korean Cucumber",
    "zh": "韓國黃瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Cucumber (韓國黃瓜). Available for wholesale order."
  },
  {
    "id": "1192P",
    "name": "Persian Cucumber",
    "zh": "波斯黃瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Persian Cucumber (波斯黃瓜). Available for wholesale order."
  },
  {
    "id": "1193",
    "name": "Pickle Cucumber",
    "zh": "墨西哥小黃瓜",
    "emoji": "🥒",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pickle Cucumber (墨西哥小黃瓜). Available for wholesale order."
  },
  {
    "id": "1194",
    "name": "Artichoke",
    "zh": "蓮花果/百合果",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Artichoke (蓮花果/百合果). Available for wholesale order."
  },
  {
    "id": "1195",
    "name": "Beets (Bunched with Leaves)",
    "zh": "帶葉甜菜根",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Beets (Bunched with Leaves) (帶葉甜菜根). Available for wholesale order."
  },
  {
    "id": "1195A",
    "name": "Beets (Loose Bag)",
    "zh": "甜菜根(散裝)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Beets (Loose Bag) (甜菜根(散裝)). Available for wholesale order."
  },
  {
    "id": "1196A",
    "name": "Radish",
    "zh": "小紅蘿蔔(散裝)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Radish (小紅蘿蔔(散裝)). Available for wholesale order."
  },
  {
    "id": "1197",
    "name": "Turnips",
    "zh": "美國圓蘿蔔/蕪",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Turnips (美國圓蘿蔔/蕪). Available for wholesale order."
  },
  {
    "id": "1198",
    "name": "Carrot Jumbo",
    "zh": "大紅蘿蔔",
    "emoji": "🥕",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Carrot Jumbo (大紅蘿蔔). Available for wholesale order."
  },
  {
    "id": "1198A",
    "name": "Carrot (2lb bags)",
    "zh": "紅蘿蔔(2磅袋裝)",
    "emoji": "🥕",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Carrot (2lb bags) (紅蘿蔔(2磅袋裝)). Available for wholesale order."
  },
  {
    "id": "1198B",
    "name": "Carrot (1lb bags)",
    "zh": "紅蘿蔔(1磅袋裝)",
    "emoji": "🥕",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Carrot (1lb bags) (紅蘿蔔(1磅袋裝)). Available for wholesale order."
  },
  {
    "id": "1198C",
    "name": "Baby Carrot (Peeled)",
    "zh": "去皮紅蘿蔔",
    "emoji": "🥕",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Carrot (Peeled) (去皮紅蘿蔔). Available for wholesale order."
  },
  {
    "id": "1199",
    "name": "American Leeks",
    "zh": "美國大蒜苗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Leeks (美國大蒜苗). Available for wholesale order."
  },
  {
    "id": "1200",
    "name": "Green Asparagus",
    "zh": "綠蘆筍",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Asparagus (綠蘆筍). Available for wholesale order."
  },
  {
    "id": "1201",
    "name": "Cremini Mushroom",
    "zh": "蘑菇包裝",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cremini Mushroom (蘑菇包裝). Available for wholesale order."
  },
  {
    "id": "1202A",
    "name": "Flower Shiitake Mushroom",
    "zh": "新鮮花菇",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Flower Shiitake Mushroom (新鮮花菇). Available for wholesale order."
  },
  {
    "id": "1203",
    "name": "Portabella Mushroom",
    "zh": "美國大傘菇/龍",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Portabella Mushroom (美國大傘菇/龍). Available for wholesale order."
  },
  {
    "id": "1204A",
    "name": "Enoki Mushroom (Medium)",
    "zh": "金針菇(中)",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "Korea"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Enoki Mushroom (Medium) (金針菇(中)). Available for wholesale order."
  },
  {
    "id": "1204B",
    "name": "Enoki Mushroom (Large)",
    "zh": "金針菇(大)",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "Korea"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Enoki Mushroom (Large) (金針菇(大)). Available for wholesale order."
  },
  {
    "id": "1205",
    "name": "Oyster Mushroom",
    "zh": "美國蠔菇",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Oyster Mushroom (美國蠔菇). Available for wholesale order."
  },
  {
    "id": "1205A",
    "name": "Oyster Mushroom",
    "zh": "中國蠔菇",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Oyster Mushroom (中國蠔菇). Available for wholesale order."
  },
  {
    "id": "1205B",
    "name": "Oyster Mushroom (Pre-packed)",
    "zh": "美國蠔菇(包裝)",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Oyster Mushroom (Pre-packed) (美國蠔菇(包裝)). Available for wholesale order."
  },
  {
    "id": "1206",
    "name": "King Oyster Mushroom (Loose)",
    "zh": "杏鮑菇散裝",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "King Oyster Mushroom (Loose) (杏鮑菇散裝). Available for wholesale order."
  },
  {
    "id": "1206A",
    "name": "Organic King Oyster Mushroom",
    "zh": "美國有機杏鮑",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Organic King Oyster Mushroom (美國有機杏鮑). Available for wholesale order."
  },
  {
    "id": "1206C",
    "name": "Mini King Oyster Mushroom",
    "zh": "迷你杏鮑菇",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mini King Oyster Mushroom (迷你杏鮑菇). Available for wholesale order."
  },
  {
    "id": "1207",
    "name": "Brown Shimeiji Mushroom",
    "zh": "鴻禧菇/蟹味菇",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Brown Shimeiji Mushroom (鴻禧菇/蟹味菇). Available for wholesale order."
  },
  {
    "id": "1207A",
    "name": "Beech White Mushroom",
    "zh": "白玉菇",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Beech White Mushroom (白玉菇). Available for wholesale order."
  },
  {
    "id": "1207B",
    "name": "Organic Maitake Mushroom",
    "zh": "好菇道有機舞",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Organic Maitake Mushroom (好菇道有機舞). Available for wholesale order."
  },
  {
    "id": "1207BB",
    "name": "Maitake Mushroom",
    "zh": "舞菇",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Maitake Mushroom (舞菇). Available for wholesale order."
  },
  {
    "id": "1207C",
    "name": "Woodear Mushroom (Fresh)",
    "zh": "木耳(小包裝)",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Woodear Mushroom (Fresh) (木耳(小包裝)). Available for wholesale order."
  },
  {
    "id": "1207D",
    "name": "Seafood Mushroom",
    "zh": "神農雪白菇/海",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Seafood Mushroom (神農雪白菇/海). Available for wholesale order."
  },
  {
    "id": "1207E",
    "name": "Organic Hon-Shimeiji Mushroom",
    "zh": "好菇道有機鴻",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Organic Hon-Shimeiji Mushroom (好菇道有機鴻). Available for wholesale order."
  },
  {
    "id": "1207F",
    "name": "Organic White Beech Mushroom",
    "zh": "好菇道有機白",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Organic White Beech Mushroom (好菇道有機白). Available for wholesale order."
  },
  {
    "id": "1207G",
    "name": "Assorted / Mixed Mushroom",
    "zh": "什錦菇(火鍋用)",
    "emoji": "🍄",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Assorted / Mixed Mushroom (什錦菇(火鍋用)). Available for wholesale order."
  },
  {
    "id": "1208",
    "name": "Green Bamboo Shoot (Vacuum Packed)",
    "zh": "綠竹筍/沙拉筍",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Bamboo Shoot (Vacuum Packed) (綠竹筍/沙拉筍). Available for wholesale order."
  },
  {
    "id": "1208A",
    "name": "Poached Lotus Slice (Vacuum Packed)",
    "zh": "包裝蓮藕(切片)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Poached Lotus Slice (Vacuum Packed) (包裝蓮藕(切片)). Available for wholesale order."
  },
  {
    "id": "1208B",
    "name": "Poached Ginko (Vacuum Packed)",
    "zh": "水煮白果(袋裝)",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Poached Ginko (Vacuum Packed) (水煮白果(袋裝)). Available for wholesale order."
  },
  {
    "id": "1208C",
    "name": "Boiled Bamboo Shoot",
    "zh": "水煮竹筍",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Boiled Bamboo Shoot (水煮竹筍). Available for wholesale order."
  },
  {
    "id": "1208D",
    "name": "Poached Small Bamboo Shoot",
    "zh": "水煮細竹筍",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Poached Small Bamboo Shoot (水煮細竹筍). Available for wholesale order."
  },
  {
    "id": "1211A",
    "name": "Tomato Bola",
    "zh": "蕃茄雙層",
    "emoji": "🍅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Tomato Bola (蕃茄雙層). Available for wholesale order."
  },
  {
    "id": "1211B",
    "name": "Tomato Roma",
    "zh": "羅馬蕃茄",
    "emoji": "🍅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Tomato Roma (羅馬蕃茄). Available for wholesale order."
  },
  {
    "id": "1211C",
    "name": "Red Cherry Tomato (Open Pint)",
    "zh": "紅櫻桃小蕃茄",
    "emoji": "🍅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Cherry Tomato (Open Pint) (紅櫻桃小蕃茄). Available for wholesale order."
  },
  {
    "id": "1211D",
    "name": "Red Cherry Tomato (Clam Shell)",
    "zh": "紅櫻桃小蕃茄(盒)",
    "emoji": "🍅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Cherry Tomato (Clam Shell) (紅櫻桃小蕃茄(盒)). Available for wholesale order."
  },
  {
    "id": "1211E",
    "name": "Red Grape Tomato (Clam Shell)",
    "zh": "紅葡萄小蕃茄",
    "emoji": "🍅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Grape Tomato (Clam Shell) (紅葡萄小蕃茄). Available for wholesale order."
  },
  {
    "id": "1211F",
    "name": "Cluster Tomato / Tomato on Vine",
    "zh": "連藤蕃茄",
    "emoji": "🍅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cluster Tomato / Tomato on Vine (連藤蕃茄). Available for wholesale order."
  },
  {
    "id": "1211G",
    "name": "Heirloom Tomato (Mixed Color)",
    "zh": "五彩蕃茄",
    "emoji": "🍅",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Heirloom Tomato (Mixed Color) (五彩蕃茄). Available for wholesale order."
  },
  {
    "id": "1212",
    "name": "Tomatillo",
    "zh": "小青蕃茄",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Tomatillo (小青蕃茄). Available for wholesale order."
  },
  {
    "id": "1212A",
    "name": "Peeled Tomatillo",
    "zh": "去殼小青蕃茄",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Peeled Tomatillo (去殼小青蕃茄). Available for wholesale order."
  },
  {
    "id": "1213",
    "name": "Jalapeno",
    "zh": "墨綠哈拉辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Jalapeno (墨綠哈拉辣椒). Available for wholesale order."
  },
  {
    "id": "1214",
    "name": "Red Fresno Chili",
    "zh": "紅弗雷辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Fresno Chili (紅弗雷辣椒). Available for wholesale order."
  },
  {
    "id": "1214A",
    "name": "Habanero Chili",
    "zh": "橘哈巴內羅辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Habanero Chili (橘哈巴內羅辣椒). Available for wholesale order."
  },
  {
    "id": "1214M",
    "name": "Manzano Pepper",
    "zh": "蘋果辣椒",
    "emoji": "🫑",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Manzano Pepper (蘋果辣椒). Available for wholesale order."
  },
  {
    "id": "1215",
    "name": "Chayote (Smooth)",
    "zh": "佛手瓜/合掌瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chayote (Smooth) (佛手瓜/合掌瓜). Available for wholesale order."
  },
  {
    "id": "1215A",
    "name": "Spiky Chayote",
    "zh": "帶刺佛手瓜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Spiky Chayote (帶刺佛手瓜). Available for wholesale order."
  },
  {
    "id": "1216",
    "name": "Yucca Root",
    "zh": "木薯",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Ecuador"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yucca Root (木薯). Available for wholesale order."
  },
  {
    "id": "1217",
    "name": "Jicama",
    "zh": "沙葛",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Jicama (沙葛). Available for wholesale order."
  },
  {
    "id": "1218",
    "name": "Yellow Lemon",
    "zh": "黃檸檬",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Lemon (黃檸檬). Available for wholesale order."
  },
  {
    "id": "1219",
    "name": "Lime Green",
    "zh": "青檸檬",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Lime Green (青檸檬). Available for wholesale order."
  },
  {
    "id": "1219A",
    "name": "Key Lime",
    "zh": "小青檸檬",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Key Lime (小青檸檬). Available for wholesale order."
  },
  {
    "id": "1220",
    "name": "Cactus Leaf / Nopal",
    "zh": "仙人掌葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cactus Leaf / Nopal (仙人掌葉). Available for wholesale order."
  },
  {
    "id": "1221",
    "name": "Mexican Green Onion",
    "zh": "墨西哥青蔥",
    "emoji": "🧅",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mexican Green Onion (墨西哥青蔥). Available for wholesale order."
  },
  {
    "id": "1222",
    "name": "Anaheim Chili / Long Hot Pepper",
    "zh": "安那罕辣椒",
    "emoji": "🫑",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Anaheim Chili / Long Hot Pepper (安那罕辣椒). Available for wholesale order."
  },
  {
    "id": "1222A",
    "name": "Pasilla / Poblano Chili",
    "zh": "墨帕西拉辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pasilla / Poblano Chili (墨帕西拉辣椒). Available for wholesale order."
  },
  {
    "id": "1222B",
    "name": "Serrano Chili",
    "zh": "澤啦諾綠辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Serrano Chili (澤啦諾綠辣椒). Available for wholesale order."
  },
  {
    "id": "1222C",
    "name": "Yellow Chili",
    "zh": "黃辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Chili (黃辣椒). Available for wholesale order."
  },
  {
    "id": "1222D",
    "name": "Hungarian / Banana Chili",
    "zh": "匈牙利辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Hungarian / Banana Chili (匈牙利辣椒). Available for wholesale order."
  },
  {
    "id": "1222E",
    "name": "Green Cayenne / Tiger Skin Pepper",
    "zh": "虎皮綠辣椒",
    "emoji": "🫑",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Cayenne / Tiger Skin Pepper (虎皮綠辣椒). Available for wholesale order."
  },
  {
    "id": "1223",
    "name": "Fresh Banana Leaf",
    "zh": "新鮮香蕉葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Banana Leaf (新鮮香蕉葉). Available for wholesale order."
  },
  {
    "id": "1224",
    "name": "Mexican Squash",
    "zh": "墨西哥瓜",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mexican Squash (墨西哥瓜). Available for wholesale order."
  },
  {
    "id": "1224A",
    "name": "Italian Squash / Zucchini",
    "zh": "義大利瓜",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Italian Squash / Zucchini (義大利瓜). Available for wholesale order."
  },
  {
    "id": "1224B",
    "name": "Yellow Squash",
    "zh": "黃金義大利瓜",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Squash (黃金義大利瓜). Available for wholesale order."
  },
  {
    "id": "1224C",
    "name": "Butternut Squash",
    "zh": "棕皮葫蘆瓜/奶",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Butternut Squash (棕皮葫蘆瓜/奶). Available for wholesale order."
  },
  {
    "id": "1224D",
    "name": "Spaghetti Squash",
    "zh": "金絲瓜",
    "emoji": "🥒",
    "category": "seasonal",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Spaghetti Squash (金絲瓜). Available for wholesale order."
  },
  {
    "id": "1224E",
    "name": "Acorn Squash",
    "zh": "橡子南瓜",
    "emoji": "🌽",
    "category": "seasonal",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Acorn Squash (橡子南瓜). Available for wholesale order."
  },
  {
    "id": "1225",
    "name": "Aloe Vera Leaves",
    "zh": "蘆薈",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Aloe Vera Leaves (蘆薈). Available for wholesale order."
  },
  {
    "id": "1226",
    "name": "Cactus Pear Red / Tuna Roja",
    "zh": "紅仙人掌果",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cactus Pear Red / Tuna Roja (紅仙人掌果). Available for wholesale order."
  },
  {
    "id": "1226A",
    "name": "Cactus Pear Green / Tuna Verde",
    "zh": "綠仙人掌果",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cactus Pear Green / Tuna Verde (綠仙人掌果). Available for wholesale order."
  },
  {
    "id": "1226B",
    "name": "Xoconoztle / Sour Cactus Pear",
    "zh": "酸仙人掌果",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Xoconoztle / Sour Cactus Pear (酸仙人掌果). Available for wholesale order."
  },
  {
    "id": "1227",
    "name": "Fresh Garbanzo Bean",
    "zh": "新鮮鷹嘴豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Garbanzo Bean (新鮮鷹嘴豆). Available for wholesale order."
  },
  {
    "id": "1227A",
    "name": "Guaje Green Bean",
    "zh": "青洋槐豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Guaje Green Bean (青洋槐豆). Available for wholesale order."
  },
  {
    "id": "1228",
    "name": "Epazote",
    "zh": "土荊芥/鴨腳草",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Epazote (土荊芥/鴨腳草). Available for wholesale order."
  },
  {
    "id": "1230",
    "name": "Korean Chili",
    "zh": "韓國辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Chili (韓國辣椒). Available for wholesale order."
  },
  {
    "id": "1230A",
    "name": "Shishito / Japanese Twisted Chili",
    "zh": "日本辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Shishito / Japanese Twisted Chili (日本辣椒). Available for wholesale order."
  },
  {
    "id": "1230B",
    "name": "Indian Chili / Long Chili",
    "zh": "印度辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Indian Chili / Long Chili (印度辣椒). Available for wholesale order."
  },
  {
    "id": "1231",
    "name": "Thai Chili Green",
    "zh": "泰國綠辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Thai Chili Green (泰國綠辣椒). Available for wholesale order."
  },
  {
    "id": "1231A",
    "name": "Thai Chili Mixed",
    "zh": "泰國辣椒-綜合",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Thai Chili Mixed (泰國辣椒-綜合). Available for wholesale order."
  },
  {
    "id": "1231B",
    "name": "Thai Chili Red",
    "zh": "泰國紅辣椒",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Thai Chili Red (泰國紅辣椒). Available for wholesale order."
  },
  {
    "id": "1232A",
    "name": "Thai Basil",
    "zh": "九層塔",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Thai Basil (九層塔). Available for wholesale order."
  },
  {
    "id": "1233",
    "name": "Lemon Grass",
    "zh": "香茅",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Lemon Grass (香茅). Available for wholesale order."
  },
  {
    "id": "1234",
    "name": "Lime Leaf",
    "zh": "檸檬葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Lime Leaf (檸檬葉). Available for wholesale order."
  },
  {
    "id": "1234AB",
    "name": "Curry Leaf",
    "zh": "咖哩葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Curry Leaf (咖哩葉). Available for wholesale order."
  },
  {
    "id": "1234C",
    "name": "Saluyot / Okra Leaf",
    "zh": "秋葵葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Saluyot / Okra Leaf (秋葵葉). Available for wholesale order."
  },
  {
    "id": "1234D",
    "name": "Methi Leaf (Indian)",
    "zh": "印度菜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Methi Leaf (Indian) (印度菜). Available for wholesale order."
  },
  {
    "id": "1234E",
    "name": "Chili Leaf",
    "zh": "辣椒葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chili Leaf (辣椒葉). Available for wholesale order."
  },
  {
    "id": "1234F",
    "name": "Chayote Leaf / Dragon Whiskers",
    "zh": "龍鬚菜",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chayote Leaf / Dragon Whiskers (龍鬚菜). Available for wholesale order."
  },
  {
    "id": "1234L",
    "name": "Moringa Leaf",
    "zh": "辣木葉",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Moringa Leaf (辣木葉). Available for wholesale order."
  },
  {
    "id": "1234N",
    "name": "Mugwort",
    "zh": "艾草",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mugwort (艾草). Available for wholesale order."
  },
  {
    "id": "1235",
    "name": "American Okra / Lady Fingers",
    "zh": "秋葵",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "American Okra / Lady Fingers (秋葵). Available for wholesale order."
  },
  {
    "id": "1235A",
    "name": "Indian Okra / Lady Fingers",
    "zh": "印度秋葵",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Indian Okra / Lady Fingers (印度秋葵). Available for wholesale order."
  },
  {
    "id": "1235B",
    "name": "Drumsticks (Moringa Pods)",
    "zh": "辣木豆",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Drumsticks (Moringa Pods) (辣木豆). Available for wholesale order."
  },
  {
    "id": "1236",
    "name": "Bac Ha / Fresh Taro Shoot",
    "zh": "拔哈/芋頭梗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Hawaii"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bac Ha / Fresh Taro Shoot (拔哈/芋頭梗). Available for wholesale order."
  },
  {
    "id": "1236A",
    "name": "Bac Ha / Fresh Taro Shoot",
    "zh": "拔哈/芋頭梗",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bac Ha / Fresh Taro Shoot (拔哈/芋頭梗). Available for wholesale order."
  },
  {
    "id": "1238",
    "name": "Obha Leaf / Japanese Shiso (for Sushi)",
    "zh": "日本大葉紫蘇",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Obha Leaf / Japanese Shiso (for Sushi) (日本大葉紫蘇). Available for wholesale order."
  },
  {
    "id": "1239A",
    "name": "Herb: Arugula",
    "zh": "紫花南芥",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Herb: Arugula (紫花南芥). Available for wholesale order."
  },
  {
    "id": "1239D",
    "name": "Herb: Oregano",
    "zh": "俄勒岡/牛至",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Herb: Oregano (俄勒岡/牛至). Available for wholesale order."
  },
  {
    "id": "1239E",
    "name": "Herb: Rosemary",
    "zh": "迷迭香",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Herb: Rosemary (迷迭香). Available for wholesale order."
  },
  {
    "id": "1239F",
    "name": "Herb: Sage",
    "zh": "鼠尾草",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Herb: Sage (鼠尾草). Available for wholesale order."
  },
  {
    "id": "1239H",
    "name": "Herb: Tarragon",
    "zh": "茵陳蒿",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Herb: Tarragon (茵陳蒿). Available for wholesale order."
  },
  {
    "id": "1239J",
    "name": "Herb: Thyme",
    "zh": "百里香",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Herb: Thyme (百里香). Available for wholesale order."
  },
  {
    "id": "1240",
    "name": "Dry Jamaica (Dried Hibiscus)",
    "zh": "乾洛神花",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Dry Jamaica (Dried Hibiscus) (乾洛神花). Available for wholesale order."
  },
  {
    "id": "1241",
    "name": "White Corn",
    "zh": "白玉米",
    "emoji": "🌽",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "White Corn (白玉米). Available for wholesale order."
  },
  {
    "id": "1241C",
    "name": "Purple Corn",
    "zh": "紫色糯米玉米",
    "emoji": "🌽",
    "category": "vegetables",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Purple Corn (紫色糯米玉米). Available for wholesale order."
  },
  {
    "id": "K102",
    "name": "Korean Young Radish with Leaf",
    "zh": "韓國帶葉中蘿蔔",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Young Radish with Leaf (韓國帶葉中蘿蔔). Available for wholesale order."
  },
  {
    "id": "K103",
    "name": "Korean Baby Radish with Leaf",
    "zh": "韓國帶葉小蘿蔔",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Baby Radish with Leaf (韓國帶葉小蘿蔔). Available for wholesale order."
  },
  {
    "id": "K105",
    "name": "Sesame Leaf / Kenip",
    "zh": "韓國大葉綠紫蘇",
    "emoji": "🥦",
    "category": "vegetables",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sesame Leaf / Kenip (韓國大葉綠紫蘇). Available for wholesale order."
  },
  {
    "id": "K106",
    "name": "Korean Young Napa / Putbechu",
    "zh": "韓國小白菜",
    "emoji": "🥬",
    "category": "asian",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Young Napa / Putbechu (韓國小白菜). Available for wholesale order."
  },
  {
    "id": "1301A",
    "name": "California Navel Orange",
    "zh": "加州柳橙",
    "emoji": "🍊",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "California Navel Orange (加州柳橙). Available for wholesale order."
  },
  {
    "id": "1302CB",
    "name": "Vietnam Pomelo (Red Meat)",
    "zh": "越南紅柚",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Vietnam"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Vietnam Pomelo (Red Meat) (越南紅柚). Available for wholesale order."
  },
  {
    "id": "1303A",
    "name": "California Grapefruit",
    "zh": "加州葡萄柚",
    "emoji": "🍇",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "California Grapefruit (加州葡萄柚). Available for wholesale order."
  },
  {
    "id": "1304C",
    "name": "Tangerine Cuties (Bagged)",
    "zh": "柑橘(小袋裝)",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Tangerine Cuties (Bagged) (柑橘(小袋裝)). Available for wholesale order."
  },
  {
    "id": "1304D",
    "name": "Minneola / Tangelo Tangerine",
    "zh": "明尼柑橘/美人",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Minneola / Tangelo Tangerine (明尼柑橘/美人). Available for wholesale order."
  },
  {
    "id": "1304L",
    "name": "Orri Tangerine (Seedless)",
    "zh": "奧利橙柑(無籽)",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Israel"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Orri Tangerine (Seedless) (奧利橙柑(無籽)). Available for wholesale order."
  },
  {
    "id": "1305",
    "name": "Fuji Apple",
    "zh": "富士蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "USA"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fuji Apple (富士蘋果). Available for wholesale order."
  },
  {
    "id": "1305G",
    "name": "Fuji Apple Candy Heart",
    "zh": "富士糖心蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fuji Apple Candy Heart (富士糖心蘋果). Available for wholesale order."
  },
  {
    "id": "1306",
    "name": "Granny Smith Apple",
    "zh": "青蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Granny Smith Apple (青蘋果). Available for wholesale order."
  },
  {
    "id": "1307",
    "name": "Gala Apple",
    "zh": "彩虹蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Gala Apple (彩虹蘋果). Available for wholesale order."
  },
  {
    "id": "1308",
    "name": "Golden Apple",
    "zh": "黃金蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Golden Apple (黃金蘋果). Available for wholesale order."
  },
  {
    "id": "1309",
    "name": "Red Delicious Apple",
    "zh": "紅蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Delicious Apple (紅蘋果). Available for wholesale order."
  },
  {
    "id": "1310B",
    "name": "Pink Lady Apple",
    "zh": "粉紅佳人蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pink Lady Apple (粉紅佳人蘋果). Available for wholesale order."
  },
  {
    "id": "1310E",
    "name": "Honeycrisp Apple",
    "zh": "蜜脆蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Honeycrisp Apple (蜜脆蘋果). Available for wholesale order."
  },
  {
    "id": "1310F",
    "name": "Rockit Apple",
    "zh": "樂淇小蘋果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rockit Apple (樂淇小蘋果). Available for wholesale order."
  },
  {
    "id": "1311",
    "name": "Mango Bola / Kent Mango",
    "zh": "芒果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mango Bola / Kent Mango (芒果). Available for wholesale order."
  },
  {
    "id": "1311A",
    "name": "Ataulfo / Yellow Mango",
    "zh": "菲律賓芒果/黃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Ataulfo / Yellow Mango (菲律賓芒果/黃). Available for wholesale order."
  },
  {
    "id": "1311E",
    "name": "Baby Ataulfo Mango",
    "zh": "迷你小黃芒果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Ataulfo Mango (迷你小黃芒果). Available for wholesale order."
  },
  {
    "id": "1311EA",
    "name": "Baby Green Mango",
    "zh": "迷你青芒果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Baby Green Mango (迷你青芒果). Available for wholesale order."
  },
  {
    "id": "1311F",
    "name": "Thai Green Mango",
    "zh": "泰國芒果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Thai Green Mango (泰國芒果). Available for wholesale order."
  },
  {
    "id": "1311G",
    "name": "Elephant / Taiwanese Mango",
    "zh": "大象芒果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Vietnam"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Elephant / Taiwanese Mango (大象芒果). Available for wholesale order."
  },
  {
    "id": "1311H",
    "name": "Hayden Mango",
    "zh": "海頓芒果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Hayden Mango (海頓芒果). Available for wholesale order."
  },
  {
    "id": "1312",
    "name": "Thai Coconut (Fresh)",
    "zh": "泰國新鮮椰子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Thailand"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Thai Coconut (Fresh) (泰國新鮮椰子). Available for wholesale order."
  },
  {
    "id": "1312A",
    "name": "Dry Coconut (Brown)",
    "zh": "老椰子(棕)",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Dry Coconut (Brown) (老椰子(棕)). Available for wholesale order."
  },
  {
    "id": "1312B",
    "name": "Fresh Coconut (White)",
    "zh": "新鮮椰子(白)",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Coconut (White) (新鮮椰子(白)). Available for wholesale order."
  },
  {
    "id": "1312C",
    "name": "Young Coconut (Fresh)",
    "zh": "越南新鮮椰子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Vietnam"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Young Coconut (Fresh) (越南新鮮椰子). Available for wholesale order."
  },
  {
    "id": "1312D",
    "name": "Ready Coconut (Fresh)",
    "zh": "即食椰子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Thailand"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Ready Coconut (Fresh) (即食椰子). Available for wholesale order."
  },
  {
    "id": "1312G",
    "name": "Green Coconut",
    "zh": "新鮮綠椰子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Coconut (新鮮綠椰子). Available for wholesale order."
  },
  {
    "id": "1313",
    "name": "Hawaiian Papaya (by air)",
    "zh": "夏威夷木瓜",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Hawaii"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Hawaiian Papaya (by air) (夏威夷木瓜). Available for wholesale order."
  },
  {
    "id": "1313B",
    "name": "Yellow Papaya / Maradol",
    "zh": "黃肉大木瓜",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Papaya / Maradol (黃肉大木瓜). Available for wholesale order."
  },
  {
    "id": "1314",
    "name": "Pineapple Gold",
    "zh": "金鳳梨",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pineapple Gold (金鳳梨). Available for wholesale order."
  },
  {
    "id": "1315",
    "name": "Banana Regular",
    "zh": "香蕉",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banana Regular (香蕉). Available for wholesale order."
  },
  {
    "id": "1315A",
    "name": "Banana Baby",
    "zh": "小香蕉",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banana Baby (小香蕉). Available for wholesale order."
  },
  {
    "id": "1315B",
    "name": "Banana Burro",
    "zh": "中芭蕉",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banana Burro (中芭蕉). Available for wholesale order."
  },
  {
    "id": "1315C",
    "name": "Banana Plantain",
    "zh": "大芭蕉",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banana Plantain (大芭蕉). Available for wholesale order."
  },
  {
    "id": "1315CA",
    "name": "Hopa Plantain / Hawaii Plantain",
    "zh": "夏威夷大芭蕉",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Hawaii"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Hopa Plantain / Hawaii Plantain (夏威夷大芭蕉). Available for wholesale order."
  },
  {
    "id": "1315D",
    "name": "Banana Red",
    "zh": "紅香蕉",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banana Red (紅香蕉). Available for wholesale order."
  },
  {
    "id": "1315E",
    "name": "Banana Manzano / Apple Banana",
    "zh": "小芭蕉",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banana Manzano / Apple Banana (小芭蕉). Available for wholesale order."
  },
  {
    "id": "1315F",
    "name": "Banana Thai",
    "zh": "泰國香蕉",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banana Thai (泰國香蕉). Available for wholesale order."
  },
  {
    "id": "1316A",
    "name": "Kiwi Green",
    "zh": "奇異果散果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kiwi Green (奇異果散果). Available for wholesale order."
  },
  {
    "id": "1317",
    "name": "Kiwi Golden",
    "zh": "黃金奇異果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kiwi Golden (黃金奇異果). Available for wholesale order."
  },
  {
    "id": "1317C",
    "name": "Red Kiwi",
    "zh": "紅色奇異果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Kiwi (紅色奇異果). Available for wholesale order."
  },
  {
    "id": "1318",
    "name": "Guava",
    "zh": "番石榴/芭樂",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Florida"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Guava (番石榴/芭樂). Available for wholesale order."
  },
  {
    "id": "1318A",
    "name": "Mexican Guava",
    "zh": "墨西哥芭樂",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mexican Guava (墨西哥芭樂). Available for wholesale order."
  },
  {
    "id": "1321D",
    "name": "Korean Singo Pear",
    "zh": "韓國沙梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Singo Pear (韓國沙梨). Available for wholesale order."
  },
  {
    "id": "1321E",
    "name": "Chinese Singo Pear (Gift Box)",
    "zh": "中國棕皮沙梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Singo Pear (Gift Box) (中國棕皮沙梨). Available for wholesale order."
  },
  {
    "id": "1321EB",
    "name": "Chinese Singo Pear (3pc pack)",
    "zh": "中國棕皮沙梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Singo Pear (3pc pack) (中國棕皮沙梨). Available for wholesale order."
  },
  {
    "id": "1321FB",
    "name": "Nansui Pear",
    "zh": "南水梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Nansui Pear (南水梨). Available for wholesale order."
  },
  {
    "id": "1322EA",
    "name": "Chinese Golden Pear",
    "zh": "中國黃金梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Chinese Golden Pear (中國黃金梨). Available for wholesale order."
  },
  {
    "id": "1323A",
    "name": "Ya Li Pear",
    "zh": "中國鴨梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Ya Li Pear (中國鴨梨). Available for wholesale order."
  },
  {
    "id": "1323B",
    "name": "Fragrant Pear (Xinjiang)",
    "zh": "新疆香梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fragrant Pear (Xinjiang) (新疆香梨). Available for wholesale order."
  },
  {
    "id": "1323C",
    "name": "Sand Pear",
    "zh": "中國黃皮沙梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sand Pear (中國黃皮沙梨). Available for wholesale order."
  },
  {
    "id": "1323CC",
    "name": "Crown Pear",
    "zh": "皇冠梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "China"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Crown Pear (皇冠梨). Available for wholesale order."
  },
  {
    "id": "1325",
    "name": "D'Anjou Pear (Green)",
    "zh": "安久梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "D'Anjou Pear (Green) (安久梨). Available for wholesale order."
  },
  {
    "id": "1326",
    "name": "Bosc Pear (Brown)",
    "zh": "巴士克梨",
    "emoji": "🍐",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Bosc Pear (Brown) (巴士克梨). Available for wholesale order."
  },
  {
    "id": "1331",
    "name": "Seedless Watermelon (Red)",
    "zh": "無籽紅西瓜",
    "emoji": "🍉",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Seedless Watermelon (Red) (無籽紅西瓜). Available for wholesale order."
  },
  {
    "id": "1331B",
    "name": "Red Mini Seedless Watermelon",
    "zh": "迷你無籽小紅",
    "emoji": "🍉",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Mini Seedless Watermelon (迷你無籽小紅). Available for wholesale order."
  },
  {
    "id": "1332B",
    "name": "Yellow Mini Seedless Watermelon",
    "zh": "迷你無籽小黃",
    "emoji": "🍉",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Mini Seedless Watermelon (迷你無籽小黃). Available for wholesale order."
  },
  {
    "id": "1332D",
    "name": "Black Skin Mini Watermelon (Red Meat)",
    "zh": "黑皮紅肉小西瓜",
    "emoji": "🍉",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Black Skin Mini Watermelon (Red Meat) (黑皮紅肉小西瓜). Available for wholesale order."
  },
  {
    "id": "1333",
    "name": "Korean Melon",
    "zh": "韓國黃香瓜",
    "emoji": "🍉",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Korean Melon (韓國黃香瓜). Available for wholesale order."
  },
  {
    "id": "1334C",
    "name": "Vietnamese Melon",
    "zh": "越南香瓜",
    "emoji": "🍉",
    "category": "fruits",
    "regions": [
      "Vietnam"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Vietnamese Melon (越南香瓜). Available for wholesale order."
  },
  {
    "id": "1335",
    "name": "Cherry Red",
    "zh": "紅櫻桃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cherry Red (紅櫻桃). Available for wholesale order."
  },
  {
    "id": "1335B",
    "name": "Cherry Golden / Rainier",
    "zh": "黃櫻桃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cherry Golden / Rainier (黃櫻桃). Available for wholesale order."
  },
  {
    "id": "1341",
    "name": "Green Seedless Grapes",
    "zh": "綠無籽葡萄",
    "emoji": "🍇",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Seedless Grapes (綠無籽葡萄). Available for wholesale order."
  },
  {
    "id": "1341A",
    "name": "Red Seedless Grapes",
    "zh": "紅無籽葡萄",
    "emoji": "🍇",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Seedless Grapes (紅無籽葡萄). Available for wholesale order."
  },
  {
    "id": "1341B",
    "name": "Black Seedless Grapes",
    "zh": "黑無籽葡萄",
    "emoji": "🍇",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Black Seedless Grapes (黑無籽葡萄). Available for wholesale order."
  },
  {
    "id": "1341C",
    "name": "Red Globe Grapes (with seeds)",
    "zh": "紅帶籽葡萄",
    "emoji": "🍇",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Globe Grapes (with seeds) (紅帶籽葡萄). Available for wholesale order."
  },
  {
    "id": "1342",
    "name": "White Peach",
    "zh": "白桃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "White Peach (白桃). Available for wholesale order."
  },
  {
    "id": "1342A",
    "name": "White Peach (2-layer)",
    "zh": "白桃雙層",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "White Peach (2-layer) (白桃雙層). Available for wholesale order."
  },
  {
    "id": "1342C",
    "name": "Donut / Saturn White Peach",
    "zh": "扁白桃/蟠桃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Donut / Saturn White Peach (扁白桃/蟠桃). Available for wholesale order."
  },
  {
    "id": "1343",
    "name": "White Nectarine",
    "zh": "白油桃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "White Nectarine (白油桃). Available for wholesale order."
  },
  {
    "id": "1344",
    "name": "Yellow Peach",
    "zh": "黃桃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Peach (黃桃). Available for wholesale order."
  },
  {
    "id": "1345",
    "name": "Yellow Nectarine",
    "zh": "黃油桃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yellow Nectarine (黃油桃). Available for wholesale order."
  },
  {
    "id": "1346C",
    "name": "Apricot",
    "zh": "杏子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Apricot (杏子). Available for wholesale order."
  },
  {
    "id": "1347B",
    "name": "Black Plum",
    "zh": "紫李子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Black Plum (紫李子). Available for wholesale order."
  },
  {
    "id": "1347G",
    "name": "Green Plum",
    "zh": "綠李子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Green Plum (綠李子). Available for wholesale order."
  },
  {
    "id": "1347R",
    "name": "Red Plum",
    "zh": "紅李子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Plum (紅李子). Available for wholesale order."
  },
  {
    "id": "1349B",
    "name": "Pomegranate",
    "zh": "紅石榴",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Peru"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pomegranate (紅石榴). Available for wholesale order."
  },
  {
    "id": "1350A",
    "name": "Cherimoya",
    "zh": "釋迦",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cherimoya (釋迦). Available for wholesale order."
  },
  {
    "id": "1351",
    "name": "Long Kumquat",
    "zh": "長金桔",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "California"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Long Kumquat (長金桔). Available for wholesale order."
  },
  {
    "id": "1352",
    "name": "Passion Fruit",
    "zh": "百香果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Passion Fruit (百香果). Available for wholesale order."
  },
  {
    "id": "1353",
    "name": "Rambutan",
    "zh": "墨西哥紅毛丹",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rambutan (墨西哥紅毛丹). Available for wholesale order."
  },
  {
    "id": "1354C",
    "name": "Dragon Fruit (White Meat)",
    "zh": "火龍果(白肉)",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Ecuador"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Dragon Fruit (White Meat) (火龍果(白肉)). Available for wholesale order."
  },
  {
    "id": "1354G",
    "name": "Golden Dragon Fruit / Pitahaya",
    "zh": "黃金火龍果/麒",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Ecuador"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Golden Dragon Fruit / Pitahaya (黃金火龍果/麒). Available for wholesale order."
  },
  {
    "id": "1354R",
    "name": "Dragon Fruit (Red Meat)",
    "zh": "火龍果(紅肉)",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Dragon Fruit (Red Meat) (火龍果(紅肉)). Available for wholesale order."
  },
  {
    "id": "1358C",
    "name": "Lychee",
    "zh": "墨西哥荔枝",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Lychee (墨西哥荔枝). Available for wholesale order."
  },
  {
    "id": "1360",
    "name": "Star Fruit",
    "zh": "墨西哥楊桃",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Star Fruit (墨西哥楊桃). Available for wholesale order."
  },
  {
    "id": "1361",
    "name": "Jack Fruit",
    "zh": "波羅蜜",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Jack Fruit (波羅蜜). Available for wholesale order."
  },
  {
    "id": "1363B",
    "name": "Longan",
    "zh": "越南龍眼",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Vietnam"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Longan (越南龍眼). Available for wholesale order."
  },
  {
    "id": "1363C",
    "name": "Longan",
    "zh": "夏威夷龍眼",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Hawaii"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Longan (夏威夷龍眼). Available for wholesale order."
  },
  {
    "id": "1364",
    "name": "Mangosteen",
    "zh": "山竹",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Thailand"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mangosteen (山竹). Available for wholesale order."
  },
  {
    "id": "1364A",
    "name": "Mangosteen",
    "zh": "山竹",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mangosteen (山竹). Available for wholesale order."
  },
  {
    "id": "1209",
    "name": "Sweet Tamarind",
    "zh": "甜酸子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sweet Tamarind (甜酸子). Available for wholesale order."
  },
  {
    "id": "1209A",
    "name": "Sour Tamarind (Dry)",
    "zh": "乾酸子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Thailand"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sour Tamarind (Dry) (乾酸子). Available for wholesale order."
  },
  {
    "id": "1369",
    "name": "Cantaloupe (Jumbo)",
    "zh": "哈蜜瓜",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cantaloupe (Jumbo) (哈蜜瓜). Available for wholesale order."
  },
  {
    "id": "1369A",
    "name": "Taiwan Cantaloupe",
    "zh": "臺灣蜜鑽香瓜",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Taiwan"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Taiwan Cantaloupe (臺灣蜜鑽香瓜). Available for wholesale order."
  },
  {
    "id": "1370",
    "name": "Honeydew",
    "zh": "青哈蜜瓜/蜜世",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Honeydew (青哈蜜瓜/蜜世). Available for wholesale order."
  },
  {
    "id": "1372",
    "name": "Hami Melon",
    "zh": "新疆哈蜜瓜",
    "emoji": "🍉",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Hami Melon (新疆哈蜜瓜). Available for wholesale order."
  },
  {
    "id": "1375",
    "name": "Strawberries",
    "zh": "草莓",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Strawberries (草莓). Available for wholesale order."
  },
  {
    "id": "1376",
    "name": "Blueberries",
    "zh": "小藍莓",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Blueberries (小藍莓). Available for wholesale order."
  },
  {
    "id": "1377",
    "name": "Raspberries",
    "zh": "小紅莓/覆盆子",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Raspberries (小紅莓/覆盆子). Available for wholesale order."
  },
  {
    "id": "1378",
    "name": "Blackberries",
    "zh": "小紫莓/桑葚",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Blackberries (小紫莓/桑葚). Available for wholesale order."
  },
  {
    "id": "1378B",
    "name": "Gooseberry Golden",
    "zh": "燈籠果",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Colombia"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Gooseberry Golden (燈籠果). Available for wholesale order."
  },
  {
    "id": "1229",
    "name": "Avocado Hass",
    "zh": "酪梨",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Mexico"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Avocado Hass (酪梨). Available for wholesale order."
  },
  {
    "id": "1229C",
    "name": "Avocado Hass",
    "zh": "酪梨",
    "emoji": "🍎",
    "category": "fruits",
    "regions": [
      "Florida"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Avocado Hass (酪梨). Available for wholesale order."
  },
  {
    "id": "FJ101",
    "name": "Fuji Soft Tofu",
    "zh": "富士嫩豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fuji Soft Tofu (富士嫩豆腐). Available for wholesale order."
  },
  {
    "id": "FJ102",
    "name": "Fuji Firm Tofu",
    "zh": "富士老豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fuji Firm Tofu (富士老豆腐). Available for wholesale order."
  },
  {
    "id": "FJ103",
    "name": "Fuji Extra Firm Tofu",
    "zh": "富士新鮮板豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fuji Extra Firm Tofu (富士新鮮板豆腐). Available for wholesale order."
  },
  {
    "id": "AQ001",
    "name": "Mandarin Egg Tofu",
    "zh": "玉子豆腐",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mandarin Egg Tofu (玉子豆腐). Available for wholesale order."
  },
  {
    "id": "LS01",
    "name": "Fried Chinese Donut / Chay Quay",
    "zh": "油條",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fried Chinese Donut / Chay Quay (油條). Available for wholesale order."
  },
  {
    "id": "WK002C",
    "name": "Rice Noodle (Cut)",
    "zh": "沙河粉",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rice Noodle (Cut) (沙河粉). Available for wholesale order."
  },
  {
    "id": "WK002NC",
    "name": "Rice Noodle (Uncut)",
    "zh": "沙河粉",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rice Noodle (Uncut) (沙河粉). Available for wholesale order."
  },
  {
    "id": "WK003",
    "name": "Super Thin Rice Roll Skin",
    "zh": "粉皮",
    "emoji": "🍚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Super Thin Rice Roll Skin (粉皮). Available for wholesale order."
  },
  {
    "id": "WK004",
    "name": "Rice Noodle Rolls with Shrimp",
    "zh": "蝦腸粉",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rice Noodle Rolls with Shrimp (蝦腸粉). Available for wholesale order."
  },
  {
    "id": "WK005",
    "name": "Rice Noodle Rolls Plain",
    "zh": "素腸粉",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Rice Noodle Rolls Plain (素腸粉). Available for wholesale order."
  },
  {
    "id": "SN001S",
    "name": "Pho Noodle (Small/Thin) 1lb",
    "zh": "粿條(細)-小袋",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pho Noodle (Small/Thin) 1lb (粿條(細)-小袋). Available for wholesale order."
  },
  {
    "id": "SN001W",
    "name": "Pad Thai Noodle (Wide) 1lb",
    "zh": "粿條(寬)-小袋",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pad Thai Noodle (Wide) 1lb (粿條(寬)-小袋). Available for wholesale order."
  },
  {
    "id": "SN002B",
    "name": "Banh Canh / Vietnamese Rice Noodle",
    "zh": "瀨粉(米台目)",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banh Canh / Vietnamese Rice Noodle (瀨粉(米台目)). Available for wholesale order."
  },
  {
    "id": "SN002L",
    "name": "Banh Bot Loc / Crystal Noodle",
    "zh": "粘米丸(銀針粉)",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banh Bot Loc / Crystal Noodle (粘米丸(銀針粉)). Available for wholesale order."
  },
  {
    "id": "SN002R",
    "name": "Banh Canh / Crystal Noodle",
    "zh": "瀨粉(粉條)",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Banh Canh / Crystal Noodle (瀨粉(粉條)). Available for wholesale order."
  },
  {
    "id": "SN002S",
    "name": "Pho Noodle (Small/Thin) 5lb",
    "zh": "粿條(細)-中袋",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pho Noodle (Small/Thin) 5lb (粿條(細)-中袋). Available for wholesale order."
  },
  {
    "id": "SN002W",
    "name": "Pad Thai Noodle (Wide) 5lb",
    "zh": "粿條(寬)-中袋",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pad Thai Noodle (Wide) 5lb (粿條(寬)-中袋). Available for wholesale order."
  },
  {
    "id": "SN003-A",
    "name": "Egg Noodle (Thin/Skinny) 1lb bag",
    "zh": "全蛋白細麵",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Egg Noodle (Thin/Skinny) 1lb bag (全蛋白細麵). Available for wholesale order."
  },
  {
    "id": "SN003-B",
    "name": "Egg Noodle (Wide) 1lb bag",
    "zh": "全蛋白粗麵",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Egg Noodle (Wide) 1lb bag (全蛋白粗麵). Available for wholesale order."
  },
  {
    "id": "SN004-A",
    "name": "Egg Noodle (Thin/Skinny) 1lb tray",
    "zh": "全蛋白細麵",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Egg Noodle (Thin/Skinny) 1lb tray (全蛋白細麵). Available for wholesale order."
  },
  {
    "id": "SN004-B",
    "name": "Egg Noodle (Wide) 1lb tray",
    "zh": "全蛋白粗麵",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Egg Noodle (Wide) 1lb tray (全蛋白粗麵). Available for wholesale order."
  },
  {
    "id": "SN005-A",
    "name": "Steam Chow Mein Noodle (Thin) 1lb",
    "zh": "蒸熟細蛋麵",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Steam Chow Mein Noodle (Thin) 1lb (蒸熟細蛋麵). Available for wholesale order."
  },
  {
    "id": "SN005-AA",
    "name": "Steam Chow Mein Noodle (Thin) 5lb",
    "zh": "蒸熟細蛋麵",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Steam Chow Mein Noodle (Thin) 5lb (蒸熟細蛋麵). Available for wholesale order."
  },
  {
    "id": "SN006",
    "name": "Pancit Noodle (Oil Noodle)",
    "zh": "港式蛋麵",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pancit Noodle (Oil Noodle) (港式蛋麵). Available for wholesale order."
  },
  {
    "id": "SN007",
    "name": "Yang Chun Mein Noodle (Wide) 3lb",
    "zh": "陽春麵",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Yang Chun Mein Noodle (Wide) 3lb (陽春麵). Available for wholesale order."
  },
  {
    "id": "SN101S",
    "name": "Pho Noodle (Small/Thin) 10lb",
    "zh": "粿條(細)-大袋",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pho Noodle (Small/Thin) 10lb (粿條(細)-大袋). Available for wholesale order."
  },
  {
    "id": "SN101W",
    "name": "Pad Thai Noodle (Wide) 10lb",
    "zh": "粿條(寬)-大袋",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Pad Thai Noodle (Wide) 10lb (粿條(寬)-大袋). Available for wholesale order."
  },
  {
    "id": "AT001L",
    "name": "All Wheat Pasta Noodle (Large/Wide)",
    "zh": "安泰陽春麵-寬",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "All Wheat Pasta Noodle (Large/Wide) (安泰陽春麵-寬). Available for wholesale order."
  },
  {
    "id": "AT001M",
    "name": "All Wheat Pasta Noodle (Medium)",
    "zh": "安泰陽春麵-中",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "All Wheat Pasta Noodle (Medium) (安泰陽春麵-中). Available for wholesale order."
  },
  {
    "id": "AT001S",
    "name": "All Wheat Pasta Noodle (Small/Thin)",
    "zh": "安泰陽春麵-細",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "All Wheat Pasta Noodle (Small/Thin) (安泰陽春麵-細). Available for wholesale order."
  },
  {
    "id": "AT002",
    "name": "Taiwanese Chow-Mein Noodle",
    "zh": "安泰臺灣油麵",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Taiwanese Chow-Mein Noodle (安泰臺灣油麵). Available for wholesale order."
  },
  {
    "id": "AT004",
    "name": "Japanese Sabu Ramen Noodle",
    "zh": "安泰日本拉麵",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Japanese Sabu Ramen Noodle (安泰日本拉麵). Available for wholesale order."
  },
  {
    "id": "AT005",
    "name": "Taiwanese Won-Ton Noodle",
    "zh": "安泰臺灣餛飩麵",
    "emoji": "🍜",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Taiwanese Won-Ton Noodle (安泰臺灣餛飩麵). Available for wholesale order."
  },
  {
    "id": "AT006",
    "name": "Taiwanese Nan-Tou E-Mein",
    "zh": "安泰南投意麵",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Taiwanese Nan-Tou E-Mein (安泰南投意麵). Available for wholesale order."
  },
  {
    "id": "ACN01",
    "name": "Agra Dry Bean Curd",
    "zh": "田園新鮮白豆",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Dry Bean Curd (田園新鮮白豆). Available for wholesale order."
  },
  {
    "id": "ACN02",
    "name": "Agra Deep-Fried Tofu (Square)",
    "zh": "田園油豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Deep-Fried Tofu (Square) (田園油豆腐). Available for wholesale order."
  },
  {
    "id": "ACN03",
    "name": "Agra Deep-Fried Bean Cake",
    "zh": "田園油爆豆腐",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Deep-Fried Bean Cake (田園油爆豆腐). Available for wholesale order."
  },
  {
    "id": "ACN04",
    "name": "Agra Five-Spiced Fried Tofu",
    "zh": "田園滷汁豆乾",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Five-Spiced Fried Tofu (田園滷汁豆乾). Available for wholesale order."
  },
  {
    "id": "ACN05",
    "name": "Agra Soft White Bean Curd",
    "zh": "田園白豆乾",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Soft White Bean Curd (田園白豆乾). Available for wholesale order."
  },
  {
    "id": "ACN06",
    "name": "Agra Savory Baked Tofu",
    "zh": "田園五香豆乾",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Savory Baked Tofu (田園五香豆乾). Available for wholesale order."
  },
  {
    "id": "ACN07",
    "name": "Agra Tofu Silk Strip",
    "zh": "田園豆乾絲",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Tofu Silk Strip (田園豆乾絲). Available for wholesale order."
  },
  {
    "id": "ACN08",
    "name": "Agra Fried Tofu Bun (Triangle)",
    "zh": "田園三角油豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Fried Tofu Bun (Triangle) (田園三角油豆腐). Available for wholesale order."
  },
  {
    "id": "ACN09",
    "name": "Agra Fried Tofu Flat (Slice)",
    "zh": "田園紅燒油豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Fried Tofu Flat (Slice) (田園紅燒油豆腐). Available for wholesale order."
  },
  {
    "id": "ACN10",
    "name": "Agra Fried Tofu Stick (Strip)",
    "zh": "田園條型油豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Fried Tofu Stick (Strip) (田園條型油豆腐). Available for wholesale order."
  },
  {
    "id": "ACN11",
    "name": "Agra Deep Fried Tofu (Small)",
    "zh": "田園小豆泡",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Deep Fried Tofu (Small) (田園小豆泡). Available for wholesale order."
  },
  {
    "id": "ACN12",
    "name": "Agra Firm Tofu",
    "zh": "田園老豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Firm Tofu (田園老豆腐). Available for wholesale order."
  },
  {
    "id": "ACN13",
    "name": "Agra Soft Tofu",
    "zh": "田園嫩豆腐",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Soft Tofu (田園嫩豆腐). Available for wholesale order."
  },
  {
    "id": "ACN14",
    "name": "Agra Soy Drink (Sweetened)",
    "zh": "田園甜豆漿",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Soy Drink (Sweetened) (田園甜豆漿). Available for wholesale order."
  },
  {
    "id": "ACN15",
    "name": "Agra Soy Drink (Unsweetened)",
    "zh": "田園無糖豆漿",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Soy Drink (Unsweetened) (田園無糖豆漿). Available for wholesale order."
  },
  {
    "id": "ACN16",
    "name": "Agra Cube Fried Tofu",
    "zh": "田園豆腐粒",
    "emoji": "🧊",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Agra Cube Fried Tofu (田園豆腐粒). Available for wholesale order."
  },
  {
    "id": "KH001",
    "name": "Roasted Peanuts",
    "zh": "大眾花生",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Roasted Peanuts (大眾花生). Available for wholesale order."
  },
  {
    "id": "CM001",
    "name": "Kimchi Large (Cosmo Brand)",
    "zh": "韓國泡菜(大)",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kimchi Large (Cosmo Brand) (韓國泡菜(大)). Available for wholesale order."
  },
  {
    "id": "CM002",
    "name": "Kimchi Medium (Cosmo Brand)",
    "zh": "韓國泡菜(中)",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kimchi Medium (Cosmo Brand) (韓國泡菜(中)). Available for wholesale order."
  },
  {
    "id": "CM003",
    "name": "Kimchi Small (Cosmo Brand)",
    "zh": "韓國泡菜(小)",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Kimchi Small (Cosmo Brand) (韓國泡菜(小)). Available for wholesale order."
  },
  {
    "id": "MS001",
    "name": "Spicy Kimchi Small (Mammyboss)",
    "zh": "辣韓國泡菜(小)",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Spicy Kimchi Small (Mammyboss) (辣韓國泡菜(小)). Available for wholesale order."
  },
  {
    "id": "MS002",
    "name": "Spicy Kimchi Medium (Mammyboss)",
    "zh": "辣韓國泡菜(中)",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Spicy Kimchi Medium (Mammyboss) (辣韓國泡菜(中)). Available for wholesale order."
  },
  {
    "id": "MS003",
    "name": "Mild Kimchi Small (Mammyboss)",
    "zh": "微辣韓國泡菜",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mild Kimchi Small (Mammyboss) (微辣韓國泡菜). Available for wholesale order."
  },
  {
    "id": "MS004",
    "name": "Mild Kimchi Medium (Mammyboss)",
    "zh": "微辣韓國泡菜",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mild Kimchi Medium (Mammyboss) (微辣韓國泡菜). Available for wholesale order."
  },
  {
    "id": "MS005",
    "name": "Mild Kimchi Large (Mammyboss)",
    "zh": "微辣韓國泡菜",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Mild Kimchi Large (Mammyboss) (微辣韓國泡菜). Available for wholesale order."
  },
  {
    "id": "MS006",
    "name": "White Kimchi Small (Mammyboss)",
    "zh": "白韓國泡菜(小)",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "White Kimchi Small (Mammyboss) (白韓國泡菜(小)). Available for wholesale order."
  },
  {
    "id": "MS007",
    "name": "White Kimchi Medium (Mammyboss)",
    "zh": "白韓國泡菜(中)",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "White Kimchi Medium (Mammyboss) (白韓國泡菜(中)). Available for wholesale order."
  },
  {
    "id": "MS008",
    "name": "Radish Kimchi (Mammyboss)",
    "zh": "韓國蘿蔔泡菜",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Radish Kimchi (Mammyboss) (韓國蘿蔔泡菜). Available for wholesale order."
  },
  {
    "id": "MS009",
    "name": "Cucumber Kimchi (Mammyboss)",
    "zh": "韓國黃瓜泡菜",
    "emoji": "🌶️",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cucumber Kimchi (Mammyboss) (韓國黃瓜泡菜). Available for wholesale order."
  },
  {
    "id": "AA01",
    "name": "Duck Balut (Small Box)",
    "zh": "鴨仔蛋(小箱)",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Duck Balut (Small Box) (鴨仔蛋(小箱)). Available for wholesale order."
  },
  {
    "id": "AA01-A",
    "name": "Duck Balut (Big Box)",
    "zh": "鴨仔蛋(大箱)",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Duck Balut (Big Box) (鴨仔蛋(大箱)). Available for wholesale order."
  },
  {
    "id": "AA05",
    "name": "Salted Duck Eggs",
    "zh": "鹹鴨蛋",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Salted Duck Eggs (鹹鴨蛋). Available for wholesale order."
  },
  {
    "id": "AA06-A",
    "name": "Red Salted Duck Eggs (Philippine Style)",
    "zh": "紅皮鹹鴨蛋",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Red Salted Duck Eggs (Philippine Style) (紅皮鹹鴨蛋). Available for wholesale order."
  },
  {
    "id": "JG001",
    "name": "Fresh Quail Eggs",
    "zh": "鵪鶉蛋",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Quail Eggs (鵪鶉蛋). Available for wholesale order."
  },
  {
    "id": "JG002",
    "name": "Fresh Duck Eggs",
    "zh": "新鮮鴨蛋",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Duck Eggs (新鮮鴨蛋). Available for wholesale order."
  },
  {
    "id": "JG004",
    "name": "Fresh Salted Duck Eggs",
    "zh": "新鮮鹹鴨蛋",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Fresh Salted Duck Eggs (新鮮鹹鴨蛋). Available for wholesale order."
  },
  {
    "id": "JG101",
    "name": "Cooked & Peeled Quail Eggs",
    "zh": "熟鵪鶉蛋",
    "emoji": "🥚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Cooked & Peeled Quail Eggs (熟鵪鶉蛋). Available for wholesale order."
  },
  {
    "id": "KY001",
    "name": "Sweet Rice / Jiu Niang",
    "zh": "吳老吉酒釀",
    "emoji": "🍚",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Sweet Rice / Jiu Niang (吳老吉酒釀). Available for wholesale order."
  },
  {
    "id": "KY003",
    "name": "Prune Beverage / Sour Plum Drink",
    "zh": "吳老吉酸梅湯",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Prune Beverage / Sour Plum Drink (吳老吉酸梅湯). Available for wholesale order."
  },
  {
    "id": "1240A",
    "name": "Corn Husk / Hoja Enconchada",
    "zh": "乾玉米葉",
    "emoji": "📦",
    "category": "other",
    "regions": [
      "N/A"
    ],
    "tags": [
      "wholesale"
    ],
    "desc": "Corn Husk / Hoja Enconchada (乾玉米葉). Available for wholesale order."
  }
];

// 2. DOM ELEMENTS SELECTORS
const DOM = {
  navbar: document.querySelector(".navbar"),
  mobileToggle: document.querySelector(".mobile-nav-toggle"),
  navMenu: document.querySelector(".nav-menu"),
  navLinks: document.querySelectorAll(".nav-link"),
  
  // Search & Catalog
  searchInput: document.querySelector(".search-input-field"),
  filterButtons: document.querySelectorAll(".filter-tab-btn"),
  catalogGrid: document.getElementById("catalog-grid"),
  
  // Stats Counters
  statsSection: document.querySelector(".about-stats-compact"),
  statNumbers: document.querySelectorAll(".stat-num-val"),
  
  // Modal Specs
  modalBackdrop: document.getElementById("specs-modal"),
  modalClose: document.querySelector(".modal-close-btn"),
  modalEmoji: document.querySelector(".modal-emoji-box"),
  modalTitle: document.getElementById("modal-title"),
  modalTags: document.getElementById("modal-tags"),
  modalDesc: document.getElementById("modal-desc"),
  modalSpecPacking: document.getElementById("spec-packing"),
  modalSpecTemp: document.getElementById("spec-temp"),
  modalSpecSeason: document.getElementById("spec-season"),
  modalSpecOrigin: document.getElementById("spec-origin"),
  modalSpecId: document.getElementById("spec-id"),
  modalSpecMin: document.getElementById("spec-min-order"),
  
  // Inquiry Form & Success Banner
  formTabClients: document.getElementById("tab-clients"),
  formTabSuppliers: document.getElementById("tab-suppliers"),
  formSectionClients: document.getElementById("form-clients"),
  formSectionSuppliers: document.getElementById("form-suppliers"),
  formClientsActual: document.getElementById("actual-form-clients"),
  formSuppliersActual: document.getElementById("actual-form-suppliers"),
  formSuccessClients: document.getElementById("success-clients"),
  formSuccessSuppliers: document.getElementById("success-suppliers")
};

// State Variables
let currentFilter = "all";
let searchQuery = "";
let hasStatsAnimated = false;

// Hybrid Pagination State
let currentPage = 1;
const ITEMS_PER_PAGE_DESKTOP = 20; // Clean 5x4 desktop grid
let mobileVisibleCount = 10; // Load 10 items initially on phone view
const ITEMS_PER_LOAD_MOBILE = 10;

// Device check utility
const isMobileDevice = () => window.innerWidth <= 480;

// ==========================================================================
// 3. STICKY NAV & MOBILE MENU
// ==========================================================================

// Adjust navbar padding/blur on scroll
window.addEventListener("scroll", () => {
  if (!DOM.navbar) return;
  
  if (window.scrollY > 40) {
    DOM.navbar.classList.add("scrolled");
  } else {
    DOM.navbar.classList.remove("scrolled");
  }
  
  // Update active nav link based on scroll section
  updateActiveNavLinkOnScroll();
});

// Mobile menu toggle open
if (DOM.mobileToggle) {
  DOM.mobileToggle.addEventListener("click", () => {
    DOM.mobileToggle.classList.toggle("open");
    DOM.navMenu.classList.toggle("open");
  });
}

// Close mobile menu when clicking a link
DOM.navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    
    // Only smooth scroll if link is an anchor on the current page
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu
        if (DOM.mobileToggle) DOM.mobileToggle.classList.remove("open");
        if (DOM.navMenu) DOM.navMenu.classList.remove("open");
        
        // Scroll to element offset (compensating for navbar)
        const navbarHeight = DOM.navbar && DOM.navbar.classList.contains("scrolled") ? 70 : 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update active nav styling
        DOM.navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});

// Scrollspy logic to update active nav links (Home page only)
function updateActiveNavLinkOnScroll() {
  if (document.querySelectorAll("section[id]").length === 0) return;
  const scrollPosition = window.scrollY + 200; // Offset for trigger point
  
  document.querySelectorAll("section[id]").forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      DOM.navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ==========================================================================
// 4. ABOUT STATS COMPACT COUNTER ANIMATION
// ==========================================================================

function animateCounters() {
  DOM.statNumbers.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    const speed = 1200; // Total duration in ms
    const increment = target / (speed / 16); // ~60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };
    
    updateCounter();
  });
}

// Setup IntersectionObserver for Stats Section
if (DOM.statsSection && DOM.statNumbers.length > 0) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStatsAnimated) {
        animateCounters();
        hasStatsAnimated = true;
        statsObserver.unobserve(DOM.statsSection);
      }
    });
  }, { threshold: 0.25 }); // Animate when 25% visible
  
  statsObserver.observe(DOM.statsSection);
}

// ==========================================================================
// 5. PRODUCE CATALOG SEARCH & FILTERING (Catalog page only)
// ==========================================================================

// Pre-calculate tab counts
function updateTabBadgeCounts() {
  if (!DOM.filterButtons.length) return;
  DOM.filterButtons.forEach(btn => {
    const category = btn.getAttribute("data-filter");
    const badge = btn.querySelector(".tab-count");
    if (badge) {
      if (category === "all") {
        badge.innerText = PRODUCE_CATALOG.length;
      } else {
        const count = PRODUCE_CATALOG.filter(p => p.category === category).length;
        badge.innerText = count;
      }
    }
  });
}

// Generate the Product HTML Card template
function createProductCardHTML(product) {
  const tagsHTML = product.tags.map(tag => 
    `<span class="product-tag ${tag}">${tag}</span>`
  ).join("");
  
  let regionsHTML = "";
  if (product.regions && product.regions.length > 0) {
    const flagMap = {
      'usa': 'USA',
      'mexico': 'Mexico',
      'california': 'California',
      'china': 'China',
      'ecuador': 'Ecuador',
      'japan': 'Japan',
      'brazil': 'Brazil',
      'fiji': 'Fiji',
      'colombia': 'Colombia',
      'israel': 'Israel',
      'vietnam': 'Vietnam',
      'thailand': 'Thailand',
      'peru': 'Peru',
      'hawaii': 'Hawaii',
      'florida': 'Florida'
    };
    
    regionsHTML = `
      <div class="product-variants-container">
        ${product.regions.map(r => {
          if (r === "N/A" || !r) return "";
          const rLower = r.toLowerCase();
          let label = r;
          let variantClass = "variant-pill variant-origin";
          
          for (const [key, text] of Object.entries(flagMap)) {
            if (rLower.includes(key)) {
              label = text;
              break;
            }
          }
          
          return `<span class="${variantClass}">${label}</span>`;
        }).join("")}
      </div>
    `;
  }
  
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-visual-wrapper">
        ${product.emoji}
      </div>
      <div class="product-card-right">
        <div class="product-tag-container">
          ${tagsHTML}
        </div>
        <h3 style="margin-bottom: 0.1rem; font-size: 1rem;">${product.name}</h3>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.6rem; font-weight: 500;">${product.zh}</div>
        ${regionsHTML}
        <div style="flex-grow: 1;"></div>
        <button class="btn-view-specs" onclick="openProductSpecs('${product.id}')" style="margin-top: 0.5rem; padding: 0.5rem;">
          <span style="font-size: 0.85rem;">View Info</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
    </div>
  `;
}

// Render filtered produce grid
function renderCatalog() {
  if (!DOM.catalogGrid) return;
  
  // Clear previous grid contents
  DOM.catalogGrid.innerHTML = "";
  
  // Filter products based on search term & category tab selection
  const filtered = PRODUCE_CATALOG.filter(product => {
    // 1. Category Filter
    const matchesCategory = currentFilter === "all" || product.category === currentFilter;
    
    // 2. Search Query Filter
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.desc.toLowerCase().includes(normalizedQuery) ||
      product.origin.toLowerCase().includes(normalizedQuery) ||
      product.tags.some(tag => tag.toLowerCase().includes(normalizedQuery));
      
    return matchesCategory && matchesSearch;
  });
  
  // Handle empty search results state
  if (filtered.length === 0) {
    DOM.catalogGrid.innerHTML = `
      <div class="catalog-no-results">
        <div class="no-results-emoji">🥬❌</div>
        <h3>No Wholesale Matches Found</h3>
        <p>We couldn't find any products matching "<strong>${searchQuery}</strong>" in the ${currentFilter === "all" ? "entire catalog" : currentFilter + " category"}. Try adjusting your keyword or resetting your filters.</p>
      </div>
    `;
    return;
  }
  
  // Check layout path: Mobile (View More) vs Desktop (Pagination)
  if (isMobileDevice()) {
    // 1. Mobile Infinite Load path
    const visible = filtered.slice(0, mobileVisibleCount);
    let gridHTML = "";
    visible.forEach(product => {
      gridHTML += createProductCardHTML(product);
    });
    
    DOM.catalogGrid.innerHTML = gridHTML;
    
    // Append 'View More' button if more crops exist
    if (filtered.length > mobileVisibleCount) {
      DOM.catalogGrid.innerHTML += `
        <div class="mobile-view-more-container">
          <button class="btn-view-more" onclick="loadMoreMobile()">
            <span>View More Crops</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      `;
    }
  } else {
    // 2. Desktop Numbered Pagination path
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE_DESKTOP);
    currentPage = Math.min(currentPage, Math.max(1, totalPages));
    
    const start = (currentPage - 1) * ITEMS_PER_PAGE_DESKTOP;
    const end = start + ITEMS_PER_PAGE_DESKTOP;
    const visible = filtered.slice(start, end);
    
    let gridHTML = "";
    visible.forEach(product => {
      gridHTML += createProductCardHTML(product);
    });
    
    DOM.catalogGrid.innerHTML = gridHTML;
    
    // Append pagination bar if there is more than 1 page
    if (totalPages > 1) {
      let paginationHTML = `<div class="catalog-pagination-container">`;
      
      // Prev trigger
      paginationHTML += `
        <button class="pag-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
          Prev
        </button>
      `;
      
      // Page numbers
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          paginationHTML += `
            <button class="pag-btn ${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">
              ${i}
            </button>
          `;
        }
      } else {
        for (let i = 1; i <= 3; i++) {
          paginationHTML += `
            <button class="pag-btn ${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">
              ${i}
            </button>
          `;
        }
        
        paginationHTML += `<span style="color:var(--text-muted); padding:0 0.5rem; font-weight:700;">...</span>`;
        
        const showInputVal = (currentPage > 3 && currentPage <= totalPages - 3) ? currentPage : '';
        paginationHTML += `<input type="number" min="4" max="${totalPages - 3}" value="${showInputVal}" placeholder="Pg" onchange="if(this.value >= 1 && this.value <= ${totalPages}) changePage(parseInt(this.value))" style="width: 55px; height: 40px; text-align: center; border: 1px solid var(--border-light); border-radius: var(--radius-sm); background: var(--bg-card); color: var(--text-main); font-size: 0.9rem; font-weight:600; font-family:inherit;">`;
        
        paginationHTML += `<span style="color:var(--text-muted); padding:0 0.5rem; font-weight:700;">...</span>`;
        
        for (let i = totalPages - 2; i <= totalPages; i++) {
          paginationHTML += `
            <button class="pag-btn ${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">
              ${i}
            </button>
          `;
        }
      }
      
      // Next trigger
      paginationHTML += `
        <button class="pag-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
          Next
        </button>
      `;
      
      paginationHTML += `</div>`;
      DOM.catalogGrid.innerHTML += paginationHTML;
    }
  }
}

// Global page change trigger (Desktop)
window.changePage = function(pageNum) {
  currentPage = pageNum;
  renderCatalog();
  
  // Smooth scroll back to catalog header
  const catalogHeader = document.querySelector(".catalog-header") || document.getElementById("produce");
  if (catalogHeader) {
    const navbarHeight = DOM.navbar && DOM.navbar.classList.contains("scrolled") ? 70 : 80;
    window.scrollTo({
      top: catalogHeader.offsetTop - navbarHeight,
      behavior: "smooth"
    });
  }
};

// Global load more trigger (Mobile)
window.loadMoreMobile = function() {
  mobileVisibleCount += ITEMS_PER_LOAD_MOBILE;
  renderCatalog();
};

// Listen to screen size shifts to dynamically switch layouts
let lastIsMobileState = isMobileDevice();
window.addEventListener("resize", () => {
  const currentIsMobileState = isMobileDevice();
  if (currentIsMobileState !== lastIsMobileState) {
    lastIsMobileState = currentIsMobileState;
    currentPage = 1;
    mobileVisibleCount = 10;
    renderCatalog();
  }
});

// Event Listeners for Tabs
if (DOM.filterButtons.length > 0) {
  DOM.filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active tab buttons styling
      DOM.filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Reset paginations
      currentPage = 1;
      mobileVisibleCount = 10;
      
      // Update state & render
      currentFilter = btn.getAttribute("data-filter");
      renderCatalog();
    });
  });
}

// Event Listener for Search Text Input
if (DOM.searchInput) {
  let searchTimeout;
  DOM.searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
      // Reset paginations
      currentPage = 1;
      mobileVisibleCount = 10;
      
      searchQuery = e.target.value;
      renderCatalog();
    }, 150);
  });
}

// Initialize Catalog renders (If catalog elements exist in DOM)
if (DOM.catalogGrid) {
  updateTabBadgeCounts();
  renderCatalog();
}

// ==========================================================================
// 6. DETAILED SPECIFICATIONS MODAL POPUP (Catalog page only)
// ==========================================================================

// Global modal opener (accessible by onclick attribute in rendered HTML cards)
window.openProductSpecs = function(productId) {
  if (!DOM.modalBackdrop) return;
  const product = PRODUCE_CATALOG.find(p => p.id === productId);
  if (!product) return;
  
  // Populate details
  if (DOM.modalEmoji) DOM.modalEmoji.innerText = product.emoji;
  if (DOM.modalTitle) DOM.modalTitle.innerText = product.name;
  if (DOM.modalDesc) DOM.modalDesc.innerText = product.desc;
  
  // Tag mapping
  if (DOM.modalTags) {
    const tagsHTML = product.tags.map(tag => 
      `<span class="product-tag ${tag}">${tag}</span>`
    ).join("");
    DOM.modalTags.innerHTML = tagsHTML;
  }
  
  // New Specs Mapping
  if (DOM.modalSpecOrigin) {
    const rgs = product.regions && product.regions.length > 0 ? product.regions.join(", ") : "N/A";
    DOM.modalSpecOrigin.innerText = rgs;
  }
  if (DOM.modalSpecId) {
    DOM.modalSpecId.innerText = product.id;
  }
  
  // Open modal backdrop
  DOM.modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent body scrolling
};

// Modal Close logic
window.closeProductModal = function() {
  if (!DOM.modalBackdrop) return;
  DOM.modalBackdrop.classList.remove("active");
  document.body.style.overflow = "";
};

if (DOM.modalClose) {
  DOM.modalClose.addEventListener("click", window.closeProductModal);
}

if (DOM.modalBackdrop) {
  DOM.modalBackdrop.addEventListener("click", (e) => {
    if (e.target === DOM.modalBackdrop) {
      window.closeProductModal();
    }
  });
}

// Close modal on ESC keypress
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && DOM.modalBackdrop && DOM.modalBackdrop.classList.contains("active")) {
    window.closeProductModal();
  }
});

// ==========================================================================
// 7. DUAL-TOGGLE INQUIRY FORM SUBMISSIONS (Home page only)
// ==========================================================================

// Form Switching Tabs
if (DOM.formTabClients && DOM.formTabSuppliers) {
  DOM.formTabClients.addEventListener("click", () => {
    DOM.formTabSuppliers.classList.remove("active");
    DOM.formTabClients.classList.add("active");
    
    DOM.formSectionSuppliers.classList.remove("active");
    DOM.formSectionClients.classList.add("active");
  });
  
  DOM.formTabSuppliers.addEventListener("click", () => {
    DOM.formTabClients.classList.remove("active");
    DOM.formTabSuppliers.classList.add("active");
    
    DOM.formSectionClients.classList.remove("active");
    DOM.formSectionSuppliers.classList.add("active");
  });
}

// Client Wholesale Form Submit handling
if (DOM.formClientsActual) {
  DOM.formClientsActual.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulate loading inside button
    const submitBtn = DOM.formClientsActual.querySelector(".form-btn-submit");
    submitBtn.innerHTML = `<span>Processing Wholesale Request...</span> <span style="animation: spin 1s linear infinite; display:inline-block;">🔄</span>`;
    submitBtn.disabled = true;
    
    setTimeout(() => {
      DOM.formClientsActual.style.display = "none";
      if (DOM.formSuccessClients) DOM.formSuccessClients.classList.add("active");
    }, 1200);
  });
}

// Supplier Partner Form Submit handling
if (DOM.formSuppliersActual) {
  DOM.formSuppliersActual.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulate loading inside button
    const submitBtn = DOM.formSuppliersActual.querySelector(".form-btn-submit");
    submitBtn.innerHTML = `<span>Registering Sourcing Partner...</span> <span style="animation: spin 1s linear infinite; display:inline-block;">🔄</span>`;
    submitBtn.disabled = true;
    
    setTimeout(() => {
      DOM.formSuppliersActual.style.display = "none";
      if (DOM.formSuccessSuppliers) DOM.formSuccessSuppliers.classList.add("active");
    }, 1200);
  });
}

// Quick resets for successful forms
window.resetWholesaleForm = function(type) {
  if (type === "clients" && DOM.formClientsActual) {
    if (DOM.formSuccessClients) DOM.formSuccessClients.classList.remove("active");
    DOM.formClientsActual.style.display = "flex";
    DOM.formClientsActual.reset();
    
    const submitBtn = DOM.formClientsActual.querySelector(".form-btn-submit");
    submitBtn.innerHTML = `<span>Submit Inquiry</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    submitBtn.disabled = false;
  } else if (type === "suppliers" && DOM.formSuppliersActual) {
    if (DOM.formSuccessSuppliers) DOM.formSuccessSuppliers.classList.remove("active");
    DOM.formSuppliersActual.style.display = "flex";
    DOM.formSuppliersActual.reset();
    
    const submitBtn = DOM.formSuppliersActual.querySelector(".form-btn-submit");
    submitBtn.innerHTML = `<span>Submit Partnership Request</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    submitBtn.disabled = false;
  }
};
