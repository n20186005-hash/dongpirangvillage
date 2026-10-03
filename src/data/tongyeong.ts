// Tongyeong destination guide content.
// Neutral, non-commercial descriptions. We intentionally avoid fabricating
// opening hours / ticket prices; visitors are pointed to official tourism
// resources instead. Attraction #1 is the anchor Dongpirang page.

export interface TongyeongAttraction {
  name: string;
  url?: string; // internal anchor (Dongpirang) or external official resource
  external?: boolean;
  blurb: string;
}

export interface TongyeongContent {
  title: string;
  h1: string;
  subtitle: string;
  intro: string;
  listTitle: string;
  attractions: TongyeongAttraction[];
  islandsTitle: string;
  islands: string[];
  islandsNote: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaUrl: string;
}

const dongpirangHome: Record<string, string> = {
  ko: '/ko/',
  en: '/en/',
  ja: '/ja/',
  zh: '/zh/',
};

const officialTour: Record<string, string> = {
  ko: 'https://www.tongyeong.go.kr/tour.web',
  en: 'https://www.tongyeong.go.kr/tour.web',
  ja: 'https://www.tongyeong.go.kr/tour.web',
  zh: 'https://www.tongyeong.go.kr/tour.web',
};

export const tongyeongContent: Record<string, TongyeongContent> = {
  ko: {
    title: '통영 가볼만한 곳 베스트 10 | 동피랑 벽화마을 가이드',
    h1: '통영 가볼만한 곳 베스트 10',
    subtitle: '동피랑 벽화마을을 시작으로 강구안, 중앙시장, 케이블카, 미륵산까지 — 통영 여행의 핵심 명소를 한곳에 정리했습니다.',
    intro:
      '통영(Tongyeong)은 경상남도 남해안의 항구 도시로, 바다·섬·예술이 어우러진 곳입니다. 동피랑 벽화마을은 통영 구도심(강구안) 바로 옆에 있어, 이 페이지를 거점 삼아 통영 전체를 둘러보기 좋습니다. 아래는 통영에서 가장 많이 찾는 10곳입니다.',
    listTitle: '통영 추천 명소 10곳',
    attractions: [
      { name: '동피랑 벽화마을', url: '/ko/', blurb: '강구안 언덕에 펼쳐진 무료 야외 벽화 갤러리. 통영 여행의 시작점이자 이 사이트의 핵심 안내 대상입니다.' },
      { name: '강구안(항구)', url: officialTour.ko, external: true, blurb: '통영을 대표하는 옛 어항. 유람선, 야경, 해산물이 모여 있어 동피랑 오르기 전후 보급 거점이 됩니다.' },
      { name: '통영 중앙시장', url: officialTour.ko, external: true, blurb: '지역 먹거리와 특산품이 모인 전통시장. 동피랑 방문 후 점심·간식 코스로 인기입니다.' },
      { name: '통영 케이블카', url: officialTour.ko, external: true, blurb: '강구안에서 미륵산 정상까지 바다 위를 가로지르는 케이블카. 통영 앞바다와 섬을 한눈에 내려다볼 수 있습니다.' },
      { name: '미륵산', url: officialTour.ko, external: true, blurb: '통영의 해안 전망대. 정상에서 한려해상 국립공원의 섬들을 조망할 수 있습니다.' },
      { name: '이순신 공원 · 충렬사', url: officialTour.ko, external: true, blurb: '통영과 임진왜란 수군 역사를 잇는 역사 공원. 가족 단위 역사 여행 코스에 자주 포함됩니다.' },
      { name: '한려해상국립공원 · 한산도', url: officialTour.ko, external: true, blurb: '통영 앞바다를 품은 국립공원. 한산도는 이순신 장군과 거북선 이야기로 유명한 인접 섬입니다.' },
      { name: '디피랑(Dpirang)', url: officialTour.ko, external: true, blurb: '통영 원도심을 무대로 하는 야간 미디어아트·스트리트 아트 투어. 동피랑의 밤 버전으로 불립니다.' },
      { name: '서피랑(Seopirang)', url: officialTour.ko, external: true, blurb: '강구안 서편 언덕 마을. 벽화와 전망, 소규모 카페가 어우러진 동피랑의 이웃 마을입니다.' },
      { name: '달아공원', url: officialTour.ko, external: true, blurb: '통영 남쪽 해안의 일몰 명소 공원. 저녁 노을과 바다 조망을 즐기기에 좋습니다.' },
    ],
    islandsTitle: '주변 추천 섬 여행',
    islands: ['한산도', '비진도', '연대도'],
    islandsNote:
      '통영은 섬으로 가는 뱃길의 거점입니다. 한산도·비진도·연대도 등은 당일 투어로 자주 방문하며, 운항은 계절·기상에 따라 달라지니 공식 관광 안내를 확인하세요.',
    faqTitle: '통영 여행 자주 묻는 질문',
    faq: [
      { q: '통영 가볼만한 곳은 어디인가요?', a: '동피랑 벽화마을, 강구안 항구, 통영 중앙시장, 통영 케이블카, 미륵산, 한려해상국립공원(한산도)이 대표적입니다. 이 페이지에서 10곳을 정리했습니다.' },
      { q: '동피랑 벽화마을은 통영에서 어디에 있나요?', a: '통영시 동호동, 강구안 항구 바로 옆 언덕에 있습니다. 강구안에서 색칠 돌계단을 도보 약 5–15분 오르면 마을 입구에 닿습니다.' },
      { q: '통영 여행 며칠이 좋나요?', a: '동피랑과 구도심 중심이라면 반나절~1일, 케이블카·섬 투어·미륵산까지 포함하면 1~2일 일정이 일반적입니다.' },
      { q: '통영은 어떻게 가나요?', a: '서울·부산 등에서 통영행 고속·시외버스가 직행하며, 김해(부산) 공항 환승도 편리합니다. 시내는 도보·시내버스·택시로 이동합니다.' },
    ],
    ctaTitle: '동피랑 벽화마을로 돌아가기',
    ctaText: '통영 여행의 핵심인 동피랑 벽화마을 — 벽화 코스, 가는 법, 사진 명소, 주변 관광지를 한곳에 정리한 가이드로 돌아갑니다.',
    ctaLabel: '동피랑 벽화마을 가이드 →',
    ctaUrl: dongpirangHome.ko,
  },
  en: {
    title: 'Best Things to Do in Tongyeong, South Korea | Dongpirang Guide',
    h1: 'Best Things to Do in Tongyeong',
    subtitle: 'From Dongpirang Mural Village to Gangguan Port, Jungang Market, the cable car and Mireuksan — the essential Tongyeong sights in one place.',
    intro:
      'Tongyeong is a harbor city on the south coast of Gyeongsangnam-do, where sea, islands and art come together. Dongpirang Mural Village sits right next to the old harbor (Gangguan), making it a perfect base to explore the wider city. Below are ten of the most visited places in Tongyeong.',
    listTitle: 'Top 10 Things to Do in Tongyeong',
    attractions: [
      { name: 'Dongpirang Mural Village', url: '/en/', blurb: 'A free open-air mural gallery on the Gangguan hillside — the starting point of any Tongyeong trip and the focus of this site’s guide.' },
      { name: 'Gangguan Port', url: officialTour.en, external: true, blurb: 'Tongyeong’s representative old fishing harbor, with sightseeing cruises, night views and seafood — a natural supply stop before and after Dongpirang.' },
      { name: 'Jungang Market', url: officialTour.en, external: true, blurb: 'A traditional market full of local food and specialties, a popular lunch and snack stop after visiting Dongpirang.' },
      { name: 'Tongyeong Cable Car', url: officialTour.en, external: true, blurb: 'A cable car crossing above the sea from Gangguan to the top of Mireuksan, with sweeping views of Tongyeong’s islands.' },
      { name: 'Mireuksan Mountain', url: officialTour.en, external: true, blurb: 'A coastal viewpoint over the city; from the summit you can see the islands of Hallyeohaesang National Park.' },
      { name: 'Yi Sun-sin Park & Chungnyeolsa', url: officialTour.en, external: true, blurb: 'A history park linking Tongyeong with the naval history of the Imjin War — often included in family history itineraries.' },
      { name: 'Hallyeohaesang NP & Hansando', url: officialTour.en, external: true, blurb: 'A national park embracing Tongyeong’s offshore waters; Hansando is the nearby island famous for Admiral Yi and the turtle ship.' },
      { name: 'Dpirang (night art walk)', url: officialTour.en, external: true, blurb: 'A nighttime media-art and street-art tour across Tongyeong’s old town — often described as Dongpirang after dark.' },
      { name: 'Seopirang Village', url: officialTour.en, external: true, blurb: 'A hillside village west of Gangguan with murals, viewpoints and small cafés — Dongpirang’s neighboring art village.' },
      { name: 'Dara Park', url: officialTour.en, external: true, blurb: 'A sunset park on Tongyeong’s southern coast, great for evening skies and sea views.' },
    ],
    islandsTitle: 'Nearby Island Trips',
    islands: ['Hansando', 'Bijindo', 'Yeondae-do'],
    islandsNote:
      'Tongyeong is a gateway to the islands. Hansando, Bijindo and Yeondae-do are common day trips; sailings vary by season and weather, so check the official tourism information before you go.',
    faqTitle: 'Tongyeong Travel FAQ',
    faq: [
      { q: 'What are the best things to do in Tongyeong?', a: 'Dongpirang Mural Village, Gangguan Port, Jungang Market, the Tongyeong Cable Car, Mireuksan and Hallyeohaesang National Park (Hansando) are the highlights. This page lists ten.' },
      { q: 'Where is Dongpirang Mural Village in Tongyeong?', a: 'It is on a hillside in Dongho-dong, Tongyeong, right next to Gangguan Port. From Gangguan, climb the painted stone stairs for about 5–15 minutes to reach the village entrance.' },
      { q: 'How many days do I need in Tongyeong?', a: 'A half-day to one day covers Dongpirang and the old town; one to two days is typical if you add the cable car, island tours and Mireuksan.' },
      { q: 'How do I get to Tongyeong?', a: 'Direct intercity/express buses run from Seoul, Busan and elsewhere; transferring via Gimhae (Busan) airport is also convenient. Within the city, use walking, local buses and taxis.' },
    ],
    ctaTitle: 'Back to the Dongpirang Mural Village Guide',
    ctaText: 'Dongpirang Mural Village — the heart of a Tongyeong trip. Return to the guide with mural routes, directions, photo spots and nearby attractions.',
    ctaLabel: 'Dongpirang Mural Village Guide →',
    ctaUrl: dongpirangHome.en,
  },
  ja: {
    title: '統営のおすすめ観光スポット10選 | 東ピラン壁画村ガイド',
    h1: '統営のおすすめ観光スポット10選',
    subtitle: '東ピラン壁画村から강구안（江邱安）港、中央市場、ロープウェイ、弥勒山まで — 統営の主要スポットをまとめました。',
    intro:
      '統営（トンヨン）は慶尚南道の南海岸にある港町で、海と島とアートが融合しています。東ピラン壁画村は旧港（강구안）のすぐ隣の丘にあり、このページを拠点に市全体を巡るのに便利です。以下は統営で最も訪れる10か所です。',
    listTitle: '統営のおすすめ10か所',
    attractions: [
      { name: '東ピラン壁画村', url: '/ja/', blurb: '강구안の丘に広がる無料の屋外壁画ギャラリー。統営旅行の起点であり、本サイトの案内の中心です。' },
      { name: '강구안（江邱安）港', url: officialTour.ja, external: true, blurb: '統営を代表する旧漁港。遊覧船、夜景、海鮮が集まり、東ピラン前後の補給拠点になります。' },
      { name: '統営中央市場', url: officialTour.ja, external: true, blurb: '地元の食と特産品が集まる伝統市場。東ピラン訪問後の昼食・軽食コースとして人気です。' },
      { name: '統営ロープウェイ', url: officialTour.ja, external: true, blurb: '강구안から弥勒山頂まで海の上を渡るロープウェイ。統営の島々を一望できます。' },
      { name: '弥勒山（ミルクサン）', url: officialTour.ja, external: true, blurb: '市街地を見下ろす海岸の展望台。頂上からは閑麗海上国立公園の島々が望めます。' },
      { name: '李舜臣公園・忠烈祠', url: officialTour.ja, external: true, blurb: '統営と壬辰倭乱の水軍史を結ぶ歴史公園。家族向け史跡コースに含まれます。' },
      { name: '閑麗海上国立公園・閑山島', url: officialTour.ja, external: true, blurb: '統営の沖合を抱く国立公園。閑山島は李舜臣将軍と亀甲船で知られる近隣の島です。' },
      { name: 'ディピラン（夜のアート散策）', url: officialTour.ja, external: true, blurb: '旧市街を舞台にした夜のメディアアート・ストリートアートツアー。東ピランの夜版とも呼ばれます。' },
      { name: 'ソピラン村', url: officialTour.ja, external: true, blurb: '강구안西の丘の村。壁画と展望、小さなカフェが調和した東ピランの隣のアート村です。' },
      { name: 'タラ公園（達亜公園）', url: officialTour.ja, external: true, blurb: '統営南岸の夕日の名所公園。夕焼けと海の展望を楽しめます。' },
    ],
    islandsTitle: '近隣のおすすめ島旅',
    islands: ['閑山島', '飛珍島', '連台島'],
    islandsNote:
      '統営は島へ向かう船の拠点です。閑山島・飛珍島・連台島などは日帰りツアーでよく訪れます。運航は季節や天候で変わるため、公式観光案内をご確認ください。',
    faqTitle: '統営旅行のよくある質問',
    faq: [
      { q: '統営のおすすめ観光スポットはどこですか？', a: '東ピラン壁画村、강구안港、中央市場、統営ロープウェイ、弥勒山、閑麗海上国立公園（閑山島）が代表的です。本ページで10か所をまとめています。' },
      { q: '東ピラン壁画村は統営のどこにありますか？', a: '統営市東湖洞、강구안港のすぐ隣の丘にあります。강구안から色とりどりの石段を徒歩約5〜15分登ると村の入り口に着きます。' },
      { q: '統営旅行は何日あればいいですか？', a: '東ピランと旧市街中心なら半日〜1日、ロープウェイ・島巡り・弥勒山を含めれば1〜2日が一般的です。' },
      { q: '統営へはどうやって行きますか？', a: 'ソウル・釜山などから統営行きの高速・市外バスが直行し、金海（釜山）空港での乗り継ぎも便利です。市内は徒歩・市内バス・タクシーで移動します。' },
    ],
    ctaTitle: '東ピラン壁画村ガイドに戻る',
    ctaText: '統営旅行の核心である東ピラン壁画村 — 壁画コース、行き方、撮影スポット、周辺観光をまとめたガイドへ戻ります。',
    ctaLabel: '東ピラン壁画村ガイド →',
    ctaUrl: dongpirangHome.ja,
  },
  zh: {
    title: '统营必去景点Top 10 | 东皮郎壁画村指南',
    h1: '统营必去景点 Top 10',
    subtitle: '从东皮郎壁画村到강구안（江邱安）港、中央市场、缆车与弥勒山 —— 统营核心景点一次整理。',
    intro:
      '统营（Tongyeong）是庆尚南道南海岸的港口城市，海、岛与艺术在此交融。东皮郎壁画村就紧邻旧港（강구안），以此为据点可轻松游览整座城市。以下为统营最受造访的10个地点。',
    listTitle: '统营推荐10大景点',
    attractions: [
      { name: '东皮郎壁画村', url: '/zh/', blurb: '강구안山坡上免费的户外壁画画廊，是统营之行的起点，也是本站的指南核心。' },
      { name: '강구안（江邱安）港', url: officialTour.zh, external: true, blurb: '统营代表性的旧渔港，聚集游船、夜景与海鲜，是东皮郎前后补给的最佳据点。' },
      { name: '统营中央市场', url: officialTour.zh, external: true, blurb: '聚集在地美食与特产的传统市场，是造访东皮郎后的午餐与小吃热门去处。' },
      { name: '统营缆车', url: officialTour.zh, external: true, blurb: '从강구안横跨海面直达弥勒山顶的缆车，可一览统营诸岛。' },
      { name: '弥勒山', url: officialTour.zh, external: true, blurb: '俯瞰市区的海岸观景台，山顶可远眺闲丽海上国立公园的岛屿。' },
      { name: '李舜臣公园·忠烈祠', url: officialTour.zh, external: true, blurb: '连结统营与壬辰倭乱水军史的历史公园，常纳入亲子史迹行程。' },
      { name: '闲丽海上国立公园·闲山岛', url: officialTour.zh, external: true, blurb: '怀抱统营外海的国立公园；闲山岛是邻近、以李舜臣将军与龟船闻名的岛屿。' },
      { name: 'Dpirang（夜间艺术散步）', url: officialTour.zh, external: true, blurb: '以旧市区为舞台的夜间媒体艺术与街头艺术巡游，被称为「夜版东皮郎」。' },
      { name: '西皮郎村', url: officialTour.zh, external: true, blurb: '강구안西侧山坡上的村落，壁画、海景与小咖啡馆交融，是东皮郎的隔壁艺术村。' },
      { name: '達亜公园', url: officialTour.zh, external: true, blurb: '统营南岸的落日名胜公园，适合欣赏晚霞与海景。' },
    ],
    islandsTitle: '周边离岛行程推荐',
    islands: ['闲山岛', '飞珍岛', '連台岛'],
    islandsNote:
      '统营是前往各岛的船班枢纽。闲山岛、飞珍岛、連台岛等常为一日游目的地；船班随季节与天气变动，出发前请查阅官方观光资讯。',
    faqTitle: '统营旅游常见问题',
    faq: [
      { q: '统营有哪些必去景点？', a: '东皮郎壁画村、강구안港、中央市场、统营缆车、弥勒山与闲丽海上国立公园（闲山岛）最具代表性。本页整理出10处。' },
      { q: '东皮郎壁画村在统营哪里？', a: '位于统营市东湖洞、강구안港旁的坡地。从강구안沿彩色石阶步行约5–15分钟即可抵达村口。' },
      { q: '统营行程需要几天？', a: '以东部郎与旧市区为中心约半日~1天；若加上缆车、离岛与弥勒山，一般为1~2天。' },
      { q: '怎么去统营？', a: '首尔、釜山等地有直达统营的高速／市外巴士，经金海（釜山）机场转乘也很方便。市内以步行、市区巴士与计程车移动。' },
    ],
    ctaTitle: '返回东皮郎壁画村指南',
    ctaText: '东皮郎壁画村 —— 统营之行的核心。回到整理壁画路线、交通方式、拍照景点与周边游玩的指南。',
    ctaLabel: '东皮郎壁画村指南 →',
    ctaUrl: dongpirangHome.zh,
  },
};
