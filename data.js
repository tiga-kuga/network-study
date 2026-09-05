window.APP_DATA = {
  "title": "NETWORK 学習アプリ",
  "subtitle": "知識の地図 → 詳細 → 問題 → 復習",
  "units": [
    {
      "id": "NW1",
      "title": "ネットワークの種類と特徴",
      "summary": "LAN / WAN / NAT・NAPT / プロキシ / 仮想化",
      "map": [
        "LAN → 有線LAN / 無線LAN",
        "WAN → LANとLANを結ぶ / VPN",
        "仮想化 → SDN / NFV",
        "LAN→Internet → NAT / NAPT / プロキシ / リバースプロキシ"
      ],
      "topics": [
        {
          "id": "NW1-1",
          "title": "LAN",
          "role": "ネットワークを利用範囲と接続方法から理解する入口。",
          "overview": "LANは限定された領域内にあるコンピュータ、プリンタ、サーバなどを接続してデータをやり取りするネットワーク。",
          "structure": [
            "LAN → 有線LAN / 無線LAN",
            "有線LAN → イーサネットケーブルで接続",
            "無線LAN → 電波等で無線LANアクセスポイントに接続"
          ],
          "principles": [
            "SSIDはネットワークの識別子で、英数字で最大32文字まで任意設定。"
          ],
          "conditions": [
            "有線LAN：ケーブルを使用",
            "無線LAN：ケーブルを用いず電波や赤外線などを使用"
          ],
          "effects": [
            "同じ建物やフロア内などの限定領域でデータ交換。"
          ],
          "exceptions": [],
          "notes": [
            "主なLANケーブル：CAT5=100Mbps、CAT5e=1Gbps、CAT6=1Gbps、CAT6A=10Gbps、CAT7=10Gbps、CAT8=40Gbps。",
            "Wi-Fi 6Eは6GHz帯を利用でき、混雑による電波干渉の影響を受けにくい。",
            "RFID：低速・省電力・数cm～数十m。Bluetooth：2.4GHz・数m～10m程度。LPWA：低速・省電力・100m超をカバー。"
          ],
          "differences": [
            "有線LAN ↔ 無線LAN",
            "Wi-Fi 6 ↔ Wi-Fi 6E",
            "RFID ↔ LPWA"
          ],
          "related": [
            "NW1-2 WAN",
            "NW4-3 CSMA/CD・CSMA/CA"
          ],
          "exam": [
            "SSID最大32文字",
            "Wi-Fi 6E＝6GHz帯",
            "CAT8＝40Gbps"
          ]
        },
        {
          "id": "NW1-2",
          "title": "WAN・VPN",
          "role": "LAN同士を広域に接続する考え方。",
          "overview": "WANは点在するLANとLANを結ぶ公衆網。WANを世界規模で実現しているのがインターネット。",
          "structure": [
            "LAN A → 公衆回線/専用通信回線 → LAN B = WAN",
            "VPN → 公衆回線を専用回線のように利用"
          ],
          "principles": [
            "VPNは専用回線を導入するよりコストを抑えられる。"
          ],
          "conditions": [
            "複数のビルに跨る社内ネットワークなどで利用。"
          ],
          "effects": [
            "広域のLAN間接続。"
          ],
          "exceptions": [],
          "notes": [],
          "differences": [
            "LAN ↔ WAN"
          ],
          "related": [
            "NW1-1 LAN",
            "NW1-4 NAT・NAPT・プロキシ"
          ],
          "exam": [
            "『LANとLANを結ぶ』→ WAN",
            "『公衆回線を専用回線のように』→ VPN"
          ]
        },
        {
          "id": "NW1-3",
          "title": "SDN・NFV",
          "role": "ネットワーク仮想化技術の整理。",
          "overview": "SDNはネットワーク機器をソフトウェア的に一元管理する技術の総称。NFVはルータやスイッチなどの機能を汎用サーバ上で実現する仮想化技術。",
          "structure": [
            "SDN → 構築・管理を仮想化 → ソフトウェア的一元管理",
            "NFV → 機器機能を仮想化 → 汎用サーバ上で実現"
          ],
          "principles": [],
          "conditions": [],
          "effects": [
            "ネットワークの仮想化。"
          ],
          "exceptions": [],
          "notes": [],
          "differences": [
            "SDN＝管理・構築",
            "NFV＝ネットワーク機器機能"
          ],
          "related": [
            "NW1"
          ],
          "exam": [
            "一元管理→SDN",
            "汎用サーバ上で機能実現→NFV"
          ]
        },
        {
          "id": "NW1-4",
          "title": "NAT・NAPT・プロキシ",
          "role": "LANからWAN/インターネットへ接続する技術。",
          "overview": "NATとNAPTはプライベートIPアドレスをグローバルIPアドレスに変換。プロキシとリバースプロキシは通信を代理・中継する。",
          "structure": [
            "NAT → プライベートIP ↔ グローバルIPを1対1変換",
            "NAPT → IP＋ポート番号を変換 → 複数端末が1つのグローバルIPを共有",
            "プロキシ → クライアントの接続要求を中継",
            "リバースプロキシ → Internet側の要求をWebサーバへ中継"
          ],
          "principles": [
            "NAT：1対1変換",
            "NAPT：IPアドレスに加えてポート番号も変換"
          ],
          "conditions": [
            "LAN上の機器がWANやインターネットと通信するとき。"
          ],
          "effects": [
            "インターネット接続を実現。プロキシ系はセキュリティを高める効果。"
          ],
          "exceptions": [],
          "notes": [
            "NAPTでは端末数が増えてもグローバルIPアドレスを増やす必要がない。"
          ],
          "differences": [
            "NAT ↔ NAPT",
            "プロキシ ↔ リバースプロキシ"
          ],
          "related": [
            "NW1-2 WAN・VPN",
            "NW3-3 接続機器"
          ],
          "exam": [
            "『ポート番号』『複数端末』『1つのグローバルIP』→ NAPT",
            "Internet→Webサーバ側の代理→リバースプロキシ"
          ]
        }
      ],
      "review": [
        "LAN＝限定範囲、WAN＝LAN間",
        "NAT＝IPを1対1変換",
        "NAPT＝IP＋ポート番号",
        "Proxy＝クライアント側の代理",
        "Reverse Proxy＝Webサーバ側の代理",
        "SDN＝一元管理、NFV＝汎用サーバで機能実現",
        "Wi-Fi 6E＝6GHz帯"
      ]
    },
    {
      "id": "NW2",
      "title": "通信回線とその評価",
      "summary": "伝送方式 / 回線種別 / データ転送速度 / ビット誤り率",
      "map": [
        "伝送方式 → 単方向 / 半二重 / 全二重",
        "回線種別 → 公衆回線 / 専用線",
        "評価 → データ転送速度 / ビット誤り率"
      ],
      "topics": [
        {
          "id": "NW2-1",
          "title": "伝送方式",
          "role": "通信方向の違いを整理。",
          "overview": "単方向・半二重・全二重の3方式。",
          "structure": [
            "単方向：A → B",
            "半二重：A ↔ B（同時は一方向）",
            "全二重：A ⇄ B（常に双方向）"
          ],
          "principles": [],
          "conditions": [],
          "effects": [],
          "exceptions": [],
          "notes": [],
          "differences": [
            "双方向可能だが同時不可＝半二重",
            "常に双方向＝全二重"
          ],
          "related": [
            "NW4-3 CSMA/CD"
          ],
          "exam": [
            "『同時には一方向』→半二重",
            "『常に双方向』→全二重"
          ]
        },
        {
          "id": "NW2-2",
          "title": "回線種別・VoIP・5G",
          "role": "通信回線の種類と関連技術。",
          "overview": "公衆回線と専用線、主な公衆回線、VoIP、5Gを整理。",
          "structure": [
            "公衆回線 → Internet・電話など外部通信",
            "専用線 → LAN・閉域WAN",
            "VoIP → 音声を符号化→パケット化→IPネットワークで送信",
            "5G → 高速大容量 / 高信頼・低遅延 / 多数同時接続"
          ],
          "principles": [],
          "conditions": [],
          "effects": [],
          "exceptions": [],
          "notes": [
            "電話回線：56kbps",
            "FTTH：100Mbps～1Gbps",
            "モバイル通信：数kbps～1Gbps",
            "5G高速大容量の理論値：20Gbps",
            "VoIP代表規格：SIP、H.323"
          ],
          "differences": [
            "公衆回線 ↔ 専用線"
          ],
          "related": [
            "NW2-1",
            "NW2-3"
          ],
          "exam": [
            "VoIP代表規格＝SIP / H.323",
            "5Gの3特徴"
          ]
        },
        {
          "id": "NW2-3",
          "title": "データ転送速度・ビット誤り率",
          "role": "回線性能を計算で評価。",
          "overview": "転送時間はデータ量÷実効転送速度。ビット誤り率は誤りビット数÷送信ビット数。",
          "structure": [
            "実効転送速度＝回線容量×回線利用率",
            "転送時間＝転送データ量÷実効転送速度",
            "ビット誤り率＝誤ったビット数÷送信したビット数"
          ],
          "principles": [
            "bps＝1秒あたりの転送ビット数。"
          ],
          "conditions": [
            "Byteからbitへ換算する場合は×8。"
          ],
          "effects": [],
          "exceptions": [],
          "notes": [
            "100MB、200Mbps、利用率0.6 → 約6.67秒",
            "64kbit/s×100秒＝6.4Mbit。1bit誤り→1/6.4M。"
          ],
          "differences": [
            "回線容量＝理論上最大",
            "実効転送速度＝回線利用率を加味"
          ],
          "related": [
            "NW2-2"
          ],
          "exam": [
            "MB→Mbitの×8",
            "回線利用率を忘れない"
          ]
        }
      ],
      "review": [
        "半二重＝双方向だが同時不可",
        "全二重＝同時双方向",
        "公衆回線＝外部通信",
        "FTTH＝光ファイバ",
        "実効速度＝回線容量×回線利用率",
        "転送時間＝データ量÷実効速度",
        "ビット誤り率＝誤りbit÷全bit"
      ]
    },
    {
      "id": "NW3",
      "title": "ネットワークアーキテクチャと接続",
      "summary": "OSI / トポロジ / 接続機器",
      "map": [
        "OSI基本参照モデル → 7層",
        "トポロジ → バス / リング / スター",
        "接続機器 → 物理層 / データリンク層 / ネットワーク層 / 上位層"
      ],
      "topics": [
        {
          "id": "NW3-1",
          "title": "OSI基本参照モデル",
          "role": "異機種間通信を実現するため、通信機能を7層に分割。",
          "overview": "ISOが策定した7層のネットワークアーキテクチャ。",
          "structure": [
            "7 アプリケーション：サービス実現方法",
            "6 プレゼンテーション：形式変換・文字コード・圧縮・暗号化",
            "5 セッション：確立・維持・終了",
            "4 トランスポート：信頼性・効率性・順序制御・ポート番号",
            "3 ネットワーク：IP・経路選択・中継",
            "2 データリンク：フレーム・順序制御・誤り制御",
            "1 物理：ケーブル・電圧・コネクタ等"
          ],
          "principles": [],
          "conditions": [],
          "effects": [],
          "exceptions": [],
          "notes": [],
          "differences": [
            "MAC→データリンク層",
            "IP→ネットワーク層",
            "Port→トランスポート層"
          ],
          "related": [
            "NW3-3 接続機器",
            "NW4 伝送制御"
          ],
          "exam": [
            "『文字コード・圧縮・暗号化』→プレゼンテーション層",
            "『IP・ルーティング』→ネットワーク層",
            "『ポート番号』→トランスポート層"
          ]
        },
        {
          "id": "NW3-2",
          "title": "ネットワークトポロジ",
          "role": "ネットワークの接続形態。",
          "overview": "バス型・リング型・スター型。",
          "structure": [
            "バス型 → 1本の伝送路に並列接続＋両端に終端抵抗",
            "リング型 → 両端を結びリング状＋トークン巡回",
            "スター型 → ハブ中心に放射状"
          ],
          "principles": [],
          "conditions": [],
          "effects": [
            "スター型は増設時に他コンピュータへ影響を与えにくく拡張性が高い。"
          ],
          "exceptions": [],
          "notes": [],
          "differences": [
            "バス ↔ リング ↔ スター"
          ],
          "related": [
            "NW3-3 接続機器"
          ],
          "exam": [
            "『ハブ中心・放射状』→スター型",
            "『トークン』→リング型",
            "『両端に終端抵抗』→バス型"
          ]
        },
        {
          "id": "NW3-3",
          "title": "接続機器",
          "role": "OSI各層と機器を対応付ける。",
          "overview": "リピータ・NIC・ブリッジ・L2スイッチ・ルータ・L3スイッチ・ゲートウェイ・プロキシ。",
          "structure": [
            "物理層 → リピータ / NIC",
            "データリンク層 → ブリッジ / L2スイッチ",
            "ネットワーク層 → ルータ / L3スイッチ",
            "トランスポート層以上 → ゲートウェイ / プロキシ"
          ],
          "principles": [
            "L2スイッチは宛先MACアドレスを見て転送",
            "ルータはIPアドレスを見てルーティング",
            "ゲートウェイはプロトコル変換"
          ],
          "conditions": [],
          "effects": [],
          "exceptions": [
            "L3スイッチはルータよりパケット処理能力が高いが、WAN接続や暗号化処理は行えない。"
          ],
          "notes": [
            "NICにはMACアドレスが登録されている。"
          ],
          "differences": [
            "L2＝MAC",
            "L3＝IP",
            "Router＝経路選択",
            "Gateway＝プロトコル変換"
          ],
          "related": [
            "NW3-1 OSI",
            "NW1-4 プロキシ"
          ],
          "exam": [
            "『MACアドレス』→L2/データリンク",
            "『IPアドレス・ルーティング』→L3/ネットワーク"
          ]
        }
      ],
      "review": [
        "OSI＝7層",
        "物理＝ケーブル・電気",
        "データリンク＝フレーム・MAC",
        "ネットワーク＝IP・ルーティング",
        "トランスポート＝ポート番号",
        "L2＝MAC、L3＝IP",
        "スター型＝ハブ中心"
      ]
    },
    {
      "id": "NW4",
      "title": "伝送制御とメディアアクセス制御",
      "summary": "ベーシック / HDLC / CRC / パリティ / ハミング / CSMA",
      "map": [
        "伝送制御 → ベーシック / HDLC",
        "誤り制御 → CRC / パリティ / ハミング",
        "メディアアクセス制御 → CSMA/CD / CSMA/CA"
      ],
      "topics": [
        {
          "id": "NW4-1",
          "title": "伝送制御・HDLC",
          "role": "送受信者の間でデータを確実に伝送するための制御。",
          "overview": "回線接続→データリンク確立→データ伝送→データリンク解放→回線切断。",
          "structure": [
            "②～④＝データリンク制御",
            "ベーシック → ブロック単位（文字単位）＋SYN符号",
            "HDLC → 任意ビット列を透過的に送信"
          ],
          "principles": [
            "HDLC：全二重通信に適する、高速、信頼性が高い、任意長ビット、コネクション方式。"
          ],
          "conditions": [],
          "effects": [],
          "exceptions": [],
          "notes": [
            "HDLCのFCSには誤り制御用のCRC符号（16bit）。",
            "コンテンション方式＝送信権を早い者勝ち",
            "ポーリング＝ホストが送信を促す",
            "セレクティング＝ホストが受信を促す"
          ],
          "differences": [
            "ベーシック ↔ HDLC"
          ],
          "related": [
            "NW4-2 誤り制御",
            "NW3-1 データリンク層"
          ],
          "exam": [
            "SYN→ベーシック",
            "任意bit・FCS・全二重→HDLC"
          ]
        },
        {
          "id": "NW4-2",
          "title": "誤り制御",
          "role": "伝送中の誤りを検出・訂正。",
          "overview": "CRC・パリティチェック・ハミング符号。",
          "structure": [
            "CRC → 生成多項式→余りを付加→受信側で割り切れるか確認",
            "パリティ → 1の個数の偶奇で検証",
            "ハミング → 2bitまで検出 / 1bit訂正"
          ],
          "principles": [],
          "conditions": [],
          "effects": [],
          "exceptions": [],
          "notes": [
            "パリティ付加方式：垂直・水平・垂直水平",
            "奇数パリティ＝1の個数を奇数",
            "偶数パリティ＝1の個数を偶数"
          ],
          "differences": [
            "CRC＝複数bit誤り検出",
            "パリティ＝1bit誤り検出",
            "ハミング＝2bit検出・1bit訂正"
          ],
          "related": [
            "NW4-1 HDLC"
          ],
          "exam": [
            "生成多項式→CRC",
            "1の個数→パリティ",
            "2bit検出＋1bit訂正→ハミング"
          ]
        },
        {
          "id": "NW4-3",
          "title": "CSMA/CD・CSMA/CA",
          "role": "LANのメディアアクセス制御。",
          "overview": "CSMA/CDは有線LANの衝突検知、CSMA/CAは無線LANの衝突回避。",
          "structure": [
            "CSMA/CD → 回線確認→送信→衝突検知→待機→再実行",
            "CSMA/CA → 回線確認→DIFS→バックオフ→送信→ACK→ACKなしなら再実行"
          ],
          "principles": [
            "CSMA/CDは半二重通信で使用。",
            "全二重では衝突検知が不要なのでCSMA/CDは不要。"
          ],
          "conditions": [
            "CSMA/CD＝有線LAN",
            "CSMA/CA＝無線LAN"
          ],
          "effects": [
            "衝突を避ける／検知する。"
          ],
          "exceptions": [],
          "notes": [
            "IEEE 802.3＝Ethernet",
            "IEEE 802.11＝無線LAN"
          ],
          "differences": [
            "CD＝Collision Detection（検知）",
            "CA＝Collision Avoidance（回避）"
          ],
          "related": [
            "NW1-1 LAN",
            "NW2-1 半二重・全二重"
          ],
          "exam": [
            "有線・半二重・衝突検知→CSMA/CD",
            "無線・DIFS・バックオフ・ACK→CSMA/CA"
          ]
        }
      ],
      "review": [
        "伝送制御＝接続→確立→伝送→解放→切断",
        "ベーシック＝文字・SYN",
        "HDLC＝任意bit・全二重・FCS",
        "CRC＝生成多項式・複数bit検出",
        "パリティ＝1の偶奇",
        "ハミング＝2bit検出・1bit訂正",
        "有線＝CSMA/CD、無線＝CSMA/CA"
      ]
    }
  ],
  "questions": [
    {
      "id": "NW1-Q01",
      "type": "○×",
      "q": "LANは点在するLAN同士を結ぶ公衆網である。",
      "choices": [
        "○",
        "×"
      ],
      "answer": "×",
      "explain": "LANは限定された領域内のネットワーク。点在するLAN同士を結ぶのはWAN。",
      "point": "『限定された領域』か『LAN間』か。",
      "topic": "NW1-1"
    },
    {
      "id": "NW1-Q02",
      "type": "四択",
      "q": "プライベートIPアドレスに加えてポート番号も変換するものは？",
      "choices": [
        "NAT",
        "NAPT",
        "NTP",
        "VPN"
      ],
      "answer": "NAPT",
      "explain": "NAPTはIPアドレスに加えてポート番号も変換する。",
      "point": "『ポート番号』『複数端末』『1つのグローバルIP』",
      "topic": "NW1-4"
    },
    {
      "id": "NW1-Q03",
      "type": "比較",
      "q": "NATとNAPTの違いとして正しいものは？",
      "choices": [
        "NATはIPを1対1、NAPTはIP＋ポート番号",
        "NATはポート番号のみ、NAPTはIPのみ"
      ],
      "answer": "NATはIPを1対1、NAPTはIP＋ポート番号",
      "explain": "NATは1対1変換、NAPTはポート番号も使う。",
      "point": "1対1 vs ポート番号",
      "topic": "NW1-4"
    },
    {
      "id": "NW1-Q04",
      "type": "条件判断",
      "q": "インターネットから到着した要求を受け取り、Webサーバへ中継するものは？",
      "choices": [
        "プロキシ",
        "リバースプロキシ",
        "NAT",
        "VPN"
      ],
      "answer": "リバースプロキシ",
      "explain": "Internet側からWebサーバ側への要求を中継する。",
      "point": "Internet → Webサーバ",
      "topic": "NW1-4"
    },
    {
      "id": "NW1-Q05",
      "type": "穴埋め",
      "q": "SDNはネットワーク機器を何的に一元管理する？",
      "choices": [
        "ソフトウェア",
        "ハードウェア"
      ],
      "answer": "ソフトウェア",
      "explain": "SDNはネットワーク機器をソフトウェア的に一元管理する。",
      "point": "一元管理",
      "topic": "NW1-3"
    },
    {
      "id": "NW1-Q06",
      "type": "数字",
      "q": "6GHz帯を利用できる無線LAN規格は？",
      "choices": [
        "Wi-Fi 6",
        "Wi-Fi 6E",
        "802.11b",
        "802.11g"
      ],
      "answer": "Wi-Fi 6E",
      "explain": "Wi-Fi 6Eは6GHz帯を利用できる。",
      "point": "6GHz → 6E",
      "topic": "NW1-1"
    },
    {
      "id": "NW2-Q01",
      "type": "○×",
      "q": "双方向通信ができるが、同時には一方向しか通信できない方式を全二重方式という。",
      "choices": [
        "○",
        "×"
      ],
      "answer": "×",
      "explain": "この説明は半二重方式。",
      "point": "同時不可＝半二重",
      "topic": "NW2-1"
    },
    {
      "id": "NW2-Q02",
      "type": "穴埋め",
      "q": "実効転送速度＝回線容量×（　　　）",
      "choices": [
        "回線利用率",
        "ビット誤り率"
      ],
      "answer": "回線利用率",
      "explain": "回線利用率を加味した実際の転送速度が実効転送速度。",
      "point": "理論値ではなく実効値",
      "topic": "NW2-3"
    },
    {
      "id": "NW2-Q03",
      "type": "計算",
      "q": "100MBを200Mbps、回線利用率0.6で送る。転送時間は？",
      "choices": [
        "約0.83秒",
        "約6.67秒",
        "約60秒",
        "約120秒"
      ],
      "answer": "約6.67秒",
      "explain": "100MB×8÷(200Mbps×0.6)≒6.67秒。",
      "point": "Byte→bit、利用率を掛ける",
      "topic": "NW2-3"
    },
    {
      "id": "NW2-Q04",
      "type": "四択",
      "q": "VoIPの代表的な規格は？",
      "choices": [
        "SIP",
        "CAT8",
        "RFID",
        "NAPT"
      ],
      "answer": "SIP",
      "explain": "VoIPの代表規格にはSIPとH.323がある。",
      "point": "VoIP規格",
      "topic": "NW2-2"
    },
    {
      "id": "NW2-Q05",
      "type": "複数知識",
      "q": "5Gの特徴として正しい組合せは？",
      "choices": [
        "高速大容量・高信頼低遅延・多数同時接続",
        "低速・省電力・短距離",
        "1対1変換・ポート変換"
      ],
      "answer": "高速大容量・高信頼低遅延・多数同時接続",
      "explain": "原資料の5Gの3特徴。",
      "point": "5Gの3特徴",
      "topic": "NW2-2"
    },
    {
      "id": "NW3-Q01",
      "type": "穴埋め",
      "q": "OSI基本参照モデルは全部で何層？",
      "choices": [
        "5層",
        "7層",
        "8層"
      ],
      "answer": "7層",
      "explain": "ISOが策定した7層モデル。",
      "point": "7層",
      "topic": "NW3-1"
    },
    {
      "id": "NW3-Q02",
      "type": "対応",
      "q": "『IPパケットの経路選択』に対応する層は？",
      "choices": [
        "データリンク層",
        "ネットワーク層",
        "トランスポート層"
      ],
      "answer": "ネットワーク層",
      "explain": "ネットワーク層はルーティングや中継を行う。",
      "point": "IP・ルーティング",
      "topic": "NW3-1"
    },
    {
      "id": "NW3-Q03",
      "type": "対応",
      "q": "宛先MACアドレスを見てLANポートへ転送する機器は？",
      "choices": [
        "L2スイッチ",
        "ルータ",
        "ゲートウェイ"
      ],
      "answer": "L2スイッチ",
      "explain": "L2スイッチはMACアドレスを見て転送する。",
      "point": "MAC＝L2",
      "topic": "NW3-3"
    },
    {
      "id": "NW3-Q04",
      "type": "四択",
      "q": "中心にハブを配置し放射状に接続する方式は？",
      "choices": [
        "バス型",
        "リング型",
        "スター型"
      ],
      "answer": "スター型",
      "explain": "スター型はハブを中心に放射状に接続する。",
      "point": "ハブ中心",
      "topic": "NW3-2"
    },
    {
      "id": "NW3-Q05",
      "type": "着目語句",
      "q": "『文字コード・圧縮・暗号化』が出てきた。対応する層は？",
      "choices": [
        "プレゼンテーション層",
        "セッション層",
        "物理層"
      ],
      "answer": "プレゼンテーション層",
      "explain": "データ形式を規定する層。",
      "point": "文字コード・圧縮・暗号化",
      "topic": "NW3-1"
    },
    {
      "id": "NW4-Q01",
      "type": "並べ替え",
      "q": "伝送制御の正しい順番は？",
      "choices": [
        "回線接続→データリンク確立→データ伝送→データリンク解放→回線切断",
        "回線接続→データ伝送→回線切断→データリンク確立"
      ],
      "answer": "回線接続→データリンク確立→データ伝送→データリンク解放→回線切断",
      "explain": "原資料の5段階。",
      "point": "確立→伝送→解放",
      "topic": "NW4-1"
    },
    {
      "id": "NW4-Q02",
      "type": "比較",
      "q": "HDLCの特徴として正しいものは？",
      "choices": [
        "任意ビット列・全二重に適する・FCS",
        "文字単位・SYN符号のみ"
      ],
      "answer": "任意ビット列・全二重に適する・FCS",
      "explain": "HDLCは任意ビット列を透過的に送れる。",
      "point": "任意bit・全二重・FCS",
      "topic": "NW4-1"
    },
    {
      "id": "NW4-Q03",
      "type": "穴埋め",
      "q": "HDLCのFCSには誤り制御用の何符号が入る？",
      "choices": [
        "CRC",
        "SYN",
        "ACK"
      ],
      "answer": "CRC",
      "explain": "FCSにはCRC符号（16bit）が入る。",
      "point": "FCS→CRC",
      "topic": "NW4-1"
    },
    {
      "id": "NW4-Q04",
      "type": "比較",
      "q": "2ビットまでの誤りを検出し、1ビットの誤りを訂正できるものは？",
      "choices": [
        "CRC",
        "パリティチェック",
        "ハミング符号"
      ],
      "answer": "ハミング符号",
      "explain": "ハミング符号は2bitまで検出・1bit訂正。",
      "point": "2検出・1訂正",
      "topic": "NW4-2"
    },
    {
      "id": "NW4-Q05",
      "type": "四択",
      "q": "無線LANの衝突回避方式は？",
      "choices": [
        "CSMA/CD",
        "CSMA/CA",
        "HDLC",
        "CRC"
      ],
      "answer": "CSMA/CA",
      "explain": "CSMA/CAは無線LANで衝突を回避する。",
      "point": "無線・DIFS・バックオフ・ACK",
      "topic": "NW4-3"
    },
    {
      "id": "NW4-Q06",
      "type": "○×",
      "q": "CSMA/CDは全二重通信でも衝突検知のため必要である。",
      "choices": [
        "○",
        "×"
      ],
      "answer": "×",
      "explain": "全二重通信では衝突検知が不要。",
      "point": "全二重→CSMA/CD不要",
      "topic": "NW4-3"
    },
    {
      "id": "NW4-Q07",
      "type": "対応",
      "q": "IEEE 802.3に対応するものは？",
      "choices": [
        "Ethernet",
        "無線LAN",
        "VPN"
      ],
      "answer": "Ethernet",
      "explain": "IEEE 802.3はEthernet。802.11は無線LAN。",
      "point": "802.3＝Ethernet",
      "topic": "NW4-3"
    }
  ]
};
