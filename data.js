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
    },
    {
      "id": "NW5",
      "title": "TCP/IP・ネットワークインタフェース層・インターネット層",
      "summary": "TCP/IP / カプセル化 / Ethernet / STP / VLAN / IPv4・IPv6 / ICMP・ARP・RARP・VRRP",
      "map": [
        "TCP/IP → 4階層：アプリケーション / トランスポート / インターネット / ネットワークインタフェース",
        "送信側 → カプセル化 / 受信側 → 非カプセル化",
        "ネットワークインタフェース層 → Ethernet / STP / VLAN / PPP・PPPoE",
        "インターネット層 → IP / IPv4 / IPv6 / ICMP / ARP / RARP / VRRP"
      ],
      "topics": [
        {
          "id": "NW5-1",
          "title": "TCP/IP階層モデル",
          "role": "プロトコル全体を、どの階層が何を担当するかで整理する土台。",
          "overview": "TCP/IPはインターネットやイントラネットの基盤として利用される通信プロトコルの総称で、4階層から構成される。",
          "structure": [
            "アプリケーション層 → アプリケーションデータのやり取りの規格",
            "トランスポート層 → ノード間のデータ転送の信頼性 / TCP・UDP",
            "インターネット層 → ネットワーク間のエンドツーエンド通信 / IP",
            "ネットワークインタフェース層 → 直接接続されたノード間 / LANはEthernet、WANはPPP・PPPoE"
          ],
          "principles": [
            "通信は対応する階層同士で行われるため、サービスに応じて様々な下位層の手段を利用できる。",
            "上位層は下位層の役割や実施内容を知らなくても通信が成立する。"
          ],
          "conditions": [],
          "effects": [
            "プロトコルを階層化して役割を分担する。"
          ],
          "exceptions": [],
          "notes": [
            "TCP/IPと呼ぶが、TCPとIPだけでなく各層で様々なプロトコルが使われる。"
          ],
          "differences": [
            "TCP / UDP → トランスポート層",
            "IP → インターネット層",
            "Ethernet / PPP / PPPoE → ネットワークインタフェース層"
          ],
          "related": [
            "NW5-2 カプセル化・非カプセル化",
            "NW6-1 TCP・UDP"
          ],
          "exam": [
            "TCP/IP＝4階層",
            "各プロトコルと階層の対応"
          ]
        },
        {
          "id": "NW5-2",
          "title": "カプセル化・非カプセル化",
          "role": "データがTCP/IPの各階層を通るときの処理順序を理解する。",
          "overview": "送信側は上位層から下位層へヘッダを付加してカプセル化し、受信側は下位層から上位層へヘッダを除去して非カプセル化する。",
          "structure": [
            "送信：アプリケーション → トランスポート → インターネット → ネットワークインタフェース",
            "カプセル化 → 上位層から下位層へデータを渡す際にヘッダを付加",
            "受信：ネットワークインタフェース → インターネット → トランスポート → アプリケーション",
            "非カプセル化 → 送信側で付加したヘッダを除去"
          ],
          "principles": [
            "TCPヘッダには宛先やポート番号など、IPヘッダにはIPアドレスなどの情報を付加する。"
          ],
          "conditions": [
            "送受信時の階層間データ受け渡し。"
          ],
          "effects": [
            "各階層に必要な制御情報を付加・除去する。"
          ],
          "exceptions": [],
          "notes": [],
          "differences": [
            "カプセル化＝ヘッダ付加",
            "非カプセル化＝ヘッダ除去"
          ],
          "related": [
            "NW5-1 TCP/IP階層モデル"
          ],
          "exam": [
            "送信＝上→下",
            "受信＝下→上",
            "ヘッダの付加・除去"
          ]
        },
        {
          "id": "NW5-3",
          "title": "Ethernet・STP・VLAN・PPP/PPPoE",
          "role": "ネットワークインタフェース層で使われる代表的なプロトコルと技術を整理する。",
          "overview": "LANではEthernet、WANではPPP・PPPoEが代表的。STPはループ回避、VLANは仮想的なグループ形成に使われる。",
          "structure": [
            "Ethernet → 主にLAN / ヘッダに宛先・送信元MACアドレス",
            "STP → ループの一部を論理的にブロック → 木構造 → ブロードキャストストーム防止",
            "リンクアグリゲーション → 複数物理回線を論理的に1本へ束ねる",
            "VLAN → 物理構成に関係なく仮想グループ形成",
            "PPP → 電話回線などで2地点通信",
            "PPPoE → 常時接続環境でPPPを利用"
          ],
          "principles": [
            "別VLAN同士ではブロードキャストパケットを届けることができない。",
            "PPPoEはID・パスワードで認証し、成功後に接続する。"
          ],
          "conditions": [
            "STP：LANがループ状になる場合のループ回避",
            "VLAN：L2スイッチ接続端末を仮想的にグループ化"
          ],
          "effects": [
            "STP＝通信ループ防止",
            "リンクアグリゲーション＝通信容量増大＋可用性",
            "VLAN＝仮想的なLAN分割"
          ],
          "exceptions": [],
          "notes": [
            "STPはIEEE802.1dで標準化。",
            "VLAN方式：ポートベース / タグ / アドレスベース / ポリシーベース。",
            "IPoEはPPPoEの後継技術として説明され、専用通信機器不要・ユーザー名/パスワード入力不要・大容量・混雑しにくい・IPv6のみ対応。"
          ],
          "differences": [
            "STP＝ループ防止 / VLAN＝仮想グループ化",
            "ポートベースVLAN＝物理ポート",
            "タグVLAN＝VLAN ID",
            "アドレスベースVLAN＝MAC/IP",
            "ポリシーベースVLAN＝ネットワークプロトコル"
          ],
          "related": [
            "NW5-1 TCP/IP階層モデル",
            "NW5-4 IPv4"
          ],
          "exam": [
            "ループ・ブロードキャストストーム → STP",
            "物理構成に関係なくグループ化 → VLAN",
            "タグ情報・VLAN ID → タグVLAN"
          ]
        },
        {
          "id": "NW5-4",
          "title": "IPv4・サブネットマスク・CIDR",
          "role": "インターネット層の中心となるIPv4アドレスとネットワーク範囲の指定方法を整理する。",
          "overview": "IPv4は32ビット。IPアドレスはネットワークアドレス部とホストアドレス部から構成され、サブネットマスクやCIDRで範囲を指定する。",
          "structure": [
            "IPv4 → 32bit → 8bitずつ区切り10進数表記",
            "IPアドレス → ネットワークアドレス部 + ホストアドレス部",
            "ホスト部が全0 → ネットワークアドレス",
            "ホスト部が全1 → ブロードキャストアドレス",
            "サブネットマスク：1＝ネットワーク部 / 0＝ホスト部",
            "CIDR → クラスにとらわれず任意ビット長のネットマスク"
          ],
          "principles": [
            "グローバルIPアドレス＝インターネット接続用。",
            "プライベートIPアドレス＝LANなど内部ネットワーク用。"
          ],
          "conditions": [],
          "effects": [
            "CIDRによりIPアドレスの効率的割当てやネットワーク集約によるルーティング負荷軽減が可能。"
          ],
          "exceptions": [],
          "notes": [
            "プライベートIP：10.0.0.0～10.255.255.255",
            "プライベートIP：172.16.0.0～172.31.255.255",
            "プライベートIP：192.168.0.0～192.168.255.255",
            "255.255.255.0＝/24、255.255.255.240＝/28、255.255.255.252＝/30"
          ],
          "differences": [
            "グローバルIP ↔ プライベートIP",
            "従来のクラス分け ↔ CIDR"
          ],
          "related": [
            "NW5-5 IPv6",
            "NW5-6 ARP"
          ],
          "exam": [
            "IPv4＝32bit",
            "サブネットマスクの1/0",
            "プレフィックス /24・/28・/30",
            "プライベートIP範囲"
          ]
        },
        {
          "id": "NW5-5",
          "title": "IPv6",
          "role": "IPv4のアドレス枯渇問題に対応する次世代IPアドレスを理解する。",
          "overview": "IPv6は128ビットの16進数を使用し、16ビットずつ8つにコロンで区切って表記する。",
          "structure": [
            "IPv6 → 128bit / 16進数",
            "128bit → 16bit × 8 → : で区切る",
            "連続する0 → 省略可能",
            "複数連続する16bitの0 → :: で省略"
          ],
          "principles": [
            "『::』は1つのIPv6アドレス中1か所のみ使用可能。"
          ],
          "conditions": [],
          "effects": [
            "IPアドレス枯渇問題から解放",
            "IPsec標準実装",
            "アドレス自動設定",
            "効率的な経路集約でルータ負荷軽減"
          ],
          "exceptions": [],
          "notes": [
            "IPv4 over IPv6によりIPv4アドレスをIPv6内にカプセル化してIPv6で通信可能。"
          ],
          "differences": [
            "IPv4＝32bit / IPv6＝128bit"
          ],
          "related": [
            "NW5-4 IPv4"
          ],
          "exam": [
            "IPv6＋ネットワーク層暗号化 → IPsec",
            ":: は1か所のみ",
            "128bit"
          ]
        },
        {
          "id": "NW5-6",
          "title": "ICMP・ARP・RARP・VRRP",
          "role": "IP通信を補助する問い合わせ・アドレス解決・冗長化プロトコルを整理する。",
          "overview": "ICMPは通信状態やエラー通知、ARP/RARPはIPとMACの対応、VRRPはルータ冗長化に用いる。",
          "structure": [
            "ICMP → 問い合わせ / エラー通知",
            "ARP → IPアドレスからMACアドレスを取得",
            "RARP → MACアドレスからIPアドレスを取得",
            "VRRP → 物理的に2台のルータを論理的に1台へ見せる"
          ],
          "principles": [
            "ARP RequestはLAN内へブロードキャスト。",
            "ARP Replyは送信元MACアドレスへユニキャストされる場合がほとんど。",
            "ARP Requestは同一ネットワーク内にしか届かない。"
          ],
          "conditions": [
            "別ネットワークのノードと通信する場合、ゲートウェイ側機器が代理でARP Replyを送信。"
          ],
          "effects": [
            "ICMP＝通信状態確認・エラー通知",
            "VRRP＝デフォルトゲートウェイの冗長化"
          ],
          "exceptions": [
            "RARPは現在あまり使われていない。"
          ],
          "notes": [
            "ping・tracerouteはICMPを使用。",
            "VRRPはIETFで標準化され、マルチベンダー環境で実装可能。"
          ],
          "differences": [
            "ARP＝IP→MAC",
            "RARP＝MAC→IP",
            "ICMP＝状態/エラー",
            "VRRP＝ルータ冗長化"
          ],
          "related": [
            "NW5-4 IPv4",
            "NW3-3 接続機器"
          ],
          "exam": [
            "ping / traceroute → ICMP",
            "IP→MAC → ARP",
            "MAC→IP → RARP",
            "ルータ冗長化 → VRRP"
          ]
        }
      ],
      "review": [
        "TCP/IP＝4階層",
        "送信＝カプセル化、受信＝非カプセル化",
        "Ethernet＝LAN、PPP/PPPoE＝WAN",
        "STP＝ループ防止、VLAN＝仮想グループ化",
        "IPv4＝32bit、IPv6＝128bit",
        "ARP＝IP→MAC、ICMP＝通信状態・エラー",
        "VRRP＝ルータ冗長化"
      ]
    },
    {
      "id": "NW6",
      "title": "トランスポート層・アプリケーション層",
      "summary": "TCP / UDP / ポート番号 / 3ウェイハンドシェイク / HTTP・HTTPS / SMTP・POP・IMAP / DHCP / DNS",
      "map": [
        "トランスポート層 → TCP / UDP / ポート番号",
        "TCP → 3ウェイハンドシェイク",
        "TCP上 → HTTP / HTTPS / SMTP / POP3 / IMAP",
        "UDP上 → DHCP / DNS"
      ],
      "topics": [
        {
          "id": "NW6-1",
          "title": "TCP・UDP・ポート番号",
          "role": "トランスポート層での通信方式とサービス識別方法を理解する。",
          "overview": "TCPとUDPはIPアドレスに加えてポート番号を使用し、1つのIPアドレスで複数サービスを提供できる。",
          "structure": [
            "TCP → コネクション型 / 高信頼",
            "UDP → コネクションレス / 順序保証なし / 処理コスト小 / TCPより高速",
            "IPアドレス + ポート番号 → サービスを識別",
            "0～1023 → ウェルノウンポート"
          ],
          "principles": [
            "TCP：宛先情報、到着確認、重複・抜け落ちチェックなどのデータ制御。",
            "UDP：リアルタイム性が重要な音声・動画ストリーミングなどで使用。"
          ],
          "conditions": [],
          "effects": [
            "TCP＝信頼性確保",
            "UDP＝処理速度を優先"
          ],
          "exceptions": [],
          "notes": [
            "ソケット＝IPアドレスとポート番号で通信するための機器等のインタフェース。",
            "TCP機能：コネクション管理 / 応答確認 / シーケンス / ウィンドウ制御 / フロー制御。",
            "UDPは送信者アドレスの偽装が容易で、DNSなどを使ったDDoS攻撃で使われることもある。"
          ],
          "differences": [
            "TCP＝コネクション型・高信頼",
            "UDP＝コネクションレス・高速"
          ],
          "related": [
            "NW6-2 3ウェイハンドシェイク",
            "NW6-3 アプリケーション層"
          ],
          "exam": [
            "リアルタイム・ストリーミング → UDP",
            "高信頼・コネクション型 → TCP",
            "0～1023 → ウェルノウンポート"
          ]
        },
        {
          "id": "NW6-2",
          "title": "3ウェイハンドシェイク",
          "role": "TCPが通信前にコネクションを確立する手順を理解する。",
          "overview": "TCPは3回のパケット送信を経てコネクションを確立する。",
          "structure": [
            "SYN → SYN/ACK → ACK → コネクション確立",
            "切断：FIN → ACK → FIN → ACK"
          ],
          "principles": [
            "要求元がSYN、要求先がSYN/ACK、要求元がACKを送る。"
          ],
          "conditions": [
            "TCPのコネクション確立時。"
          ],
          "effects": [
            "通信開始前に仮想的な通信路を確立。"
          ],
          "exceptions": [],
          "notes": [],
          "differences": [
            "接続＝SYN/SYN-ACK/ACK",
            "切断＝FIN/ACK/FIN/ACK"
          ],
          "related": [
            "NW6-1 TCP"
          ],
          "exam": [
            "順序問題：SYN → SYN/ACK → ACK"
          ]
        },
        {
          "id": "NW6-3",
          "title": "HTTP・HTTPS・SMTP・POP・IMAP",
          "role": "TCP上で動作する代表的なアプリケーション層プロトコルを整理する。",
          "overview": "Web通信と電子メールで使われる代表的プロトコルを、用途・ポート番号・保存方法で区別する。",
          "structure": [
            "HTTP → WWW / Request→Response / TCP80",
            "HTTPS → SSLを利用したHTTP / TCP443",
            "SMTP → 電子メール送信 / TCP25",
            "POP3 → 電子メール受信 / クライアントへダウンロード / TCP110",
            "IMAP → ダウンロードせずメールサーバ上で操作・保存"
          ],
          "principles": [],
          "conditions": [],
          "effects": [],
          "exceptions": [],
          "notes": [
            "HTTPステータス：200＝正しく表示、403＝アクセス禁止、404＝ページが見つからない、503＝サービスが一時的に利用不可。"
          ],
          "differences": [
            "HTTP＝80 / HTTPS＝443",
            "SMTP＝送信 / POP＝受信",
            "POP＝DLして閲覧 / IMAP＝サーバ上で操作・保存"
          ],
          "related": [
            "NW6-1 TCP・ポート番号"
          ],
          "exam": [
            "80＝HTTP",
            "443＝HTTPS",
            "25＝SMTP",
            "110＝POP3",
            "404＝Not Found"
          ]
        },
        {
          "id": "NW6-4",
          "title": "DHCP",
          "role": "ネットワーク接続時にIPアドレスを自動割当てする仕組みを理解する。",
          "overview": "DHCPはクライアントとサーバ間でメッセージを交換し、クライアントが使用するIPアドレスを決定する。",
          "structure": [
            "DHCP DISCOVER → DHCP OFFER → DHCP REQUEST → DHCP ACK",
            "IP未割当て時：送信元 0.0.0.0 → 宛先 255.255.255.255",
            "DHCPサーバ宛 → UDP67 / DHCPクライアント宛 → UDP68"
          ],
          "principles": [
            "クライアントにIPが付与されるまでは自身のネットワークが決まっていないためブロードキャストする。"
          ],
          "conditions": [
            "コンピュータがネットワークへ接続し、自動でIPアドレスを取得するとき。"
          ],
          "effects": [
            "IPアドレスを自動的に割り振る。"
          ],
          "exceptions": [],
          "notes": [],
          "differences": [
            "サーバ＝67 / クライアント＝68"
          ],
          "related": [
            "NW6-1 UDP",
            "NW5-4 IPv4"
          ],
          "exam": [
            "DISCOVER→OFFER→REQUEST→ACK",
            "0.0.0.0 / 255.255.255.255",
            "67/68"
          ]
        },
        {
          "id": "NW6-5",
          "title": "DNS",
          "role": "ドメイン名とIPアドレスを対応付ける名前解決を理解する。",
          "overview": "DNSはドメイン名とIPアドレスを対応付ける分散型サービス。",
          "structure": [
            "通常の名前解決 → DNSクライアントからDNSサーバへ UDP53",
            "ゾーン転送 → DNSサーバ間で TCP53",
            "www.example.co.jp → ルート → jp → co → example → www"
          ],
          "principles": [
            "DNS名はピリオドで階層化され、各階層が下位ドメイン名やホスト名を管理する。"
          ],
          "conditions": [
            "名前解決とゾーン転送では使用するトランスポートが異なる。"
          ],
          "effects": [
            "ドメイン名からIPアドレスを取得。"
          ],
          "exceptions": [
            "ゾーン転送はTCP53を使用。"
          ],
          "notes": [],
          "differences": [
            "通常の名前解決＝UDP53",
            "ゾーン転送＝TCP53"
          ],
          "related": [
            "NW6-1 UDP/TCP",
            "NW5-4 IP"
          ],
          "exam": [
            "ドメイン名→IP＝DNS",
            "通常＝UDP53 / ゾーン転送＝TCP53"
          ]
        }
      ],
      "review": [
        "TCP＝高信頼・コネクション型、UDP＝高速・コネクションレス",
        "TCP接続＝SYN → SYN/ACK → ACK",
        "HTTP＝80、HTTPS＝443",
        "SMTP＝送信、POP＝DL受信、IMAP＝サーバ上操作",
        "DHCP＝DISCOVER → OFFER → REQUEST → ACK",
        "DHCP＝67サーバ / 68クライアント",
        "DNS＝名前解決UDP53、ゾーン転送TCP53"
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
    },
    {
      "id": "NW5-Q01",
      "type": "四択",
      "q": "TCP/IP階層モデルはいくつの階層から構成される？",
      "choices": [
        "3階層",
        "4階層",
        "5階層",
        "7階層"
      ],
      "answer": "4階層",
      "explain": "TCP/IP階層モデルは4階層。",
      "point": "TCP/IP＝4階層",
      "topic": "NW5-1"
    },
    {
      "id": "NW5-Q02",
      "type": "対応",
      "q": "Ethernetが属する階層は？",
      "choices": [
        "アプリケーション層",
        "トランスポート層",
        "インターネット層",
        "ネットワークインタフェース層"
      ],
      "answer": "ネットワークインタフェース層",
      "explain": "LANではEthernetが代表的なネットワークインタフェース層のプロトコル。",
      "point": "LAN→Ethernet",
      "topic": "NW5-1"
    },
    {
      "id": "NW5-Q03",
      "type": "○×",
      "q": "送信側では下位層から上位層の順にカプセル化する。",
      "choices": [
        "○",
        "×"
      ],
      "answer": "×",
      "explain": "送信側はアプリケーション層からネットワークインタフェース層へ、上位層→下位層の順にカプセル化する。",
      "point": "送信＝上→下",
      "topic": "NW5-2"
    },
    {
      "id": "NW5-Q04",
      "type": "四択",
      "q": "LANのループによるブロードキャストストームを防ぐものは？",
      "choices": [
        "VLAN",
        "STP",
        "ARP",
        "ICMP"
      ],
      "answer": "STP",
      "explain": "STPはループの一部を論理的にブロックして木構造として扱う。",
      "point": "ループ・ブロードキャストストーム",
      "topic": "NW5-3"
    },
    {
      "id": "NW5-Q05",
      "type": "四択",
      "q": "タグVLANのグルーピングに使用するものは？",
      "choices": [
        "VLAN ID",
        "ポート番号",
        "SSID",
        "プレフィックス長"
      ],
      "answer": "VLAN ID",
      "explain": "タグVLANはパケット内のタグ情報にVLAN IDを指定する。",
      "point": "タグ情報→VLAN ID",
      "topic": "NW5-3"
    },
    {
      "id": "NW5-Q06",
      "type": "対応",
      "q": "IPアドレスからMACアドレスを得るプロトコルは？",
      "choices": [
        "ARP",
        "RARP",
        "ICMP",
        "VRRP"
      ],
      "answer": "ARP",
      "explain": "ARPはIPアドレスからMACアドレスを得る。",
      "point": "IP→MAC",
      "topic": "NW5-6"
    },
    {
      "id": "NW5-Q07",
      "type": "対応",
      "q": "MACアドレスからIPアドレスを得るプロトコルは？",
      "choices": [
        "ARP",
        "RARP",
        "ICMP",
        "VRRP"
      ],
      "answer": "RARP",
      "explain": "RARPはARPの逆でMACアドレスからIPアドレスを得る。",
      "point": "MAC→IP",
      "topic": "NW5-6"
    },
    {
      "id": "NW5-Q08",
      "type": "○×",
      "q": "ARP Requestは別ネットワークまでブロードキャストされる。",
      "choices": [
        "○",
        "×"
      ],
      "answer": "×",
      "explain": "ARP Requestは同一ネットワーク内にしか届かない。",
      "point": "ARP Request＝同一ネットワーク内",
      "topic": "NW5-6"
    },
    {
      "id": "NW5-Q09",
      "type": "数字",
      "q": "IPv4とIPv6のビット数の組合せとして正しいものは？",
      "choices": [
        "IPv4 32bit / IPv6 128bit",
        "IPv4 64bit / IPv6 128bit",
        "IPv4 32bit / IPv6 64bit"
      ],
      "answer": "IPv4 32bit / IPv6 128bit",
      "explain": "IPv4は32bit、IPv6は128bit。",
      "point": "32 / 128",
      "topic": "NW5-5"
    },
    {
      "id": "NW5-Q10",
      "type": "四択",
      "q": "255.255.255.240のプレフィックス表記は？",
      "choices": [
        "/16",
        "/24",
        "/28",
        "/30"
      ],
      "answer": "/28",
      "explain": "原資料では255.255.255.240＝/28。",
      "point": "255.255.255.240→/28",
      "topic": "NW5-4"
    },
    {
      "id": "NW5-Q11",
      "type": "○×",
      "q": "IPv6の『::』は1つのIPv6アドレス内で何度でも使用できる。",
      "choices": [
        "○",
        "×"
      ],
      "answer": "×",
      "explain": "『::』は1つのアドレス中1か所のみ使用可能。",
      "point": "::＝1か所のみ",
      "topic": "NW5-5"
    },
    {
      "id": "NW5-Q12",
      "type": "資格問題型",
      "q": "IPv6を利用した通信で、ネットワーク層の暗号化に利用するものは？",
      "choices": [
        "IPsec",
        "PPP",
        "SSH",
        "SSL"
      ],
      "answer": "IPsec",
      "explain": "原資料の例題ではIPv6の特徴としてIPsecが標準実装されている点からIPsecを選ぶ。",
      "point": "IPv6＋ネットワーク層暗号化",
      "topic": "NW5-5"
    },
    {
      "id": "NW5-Q13",
      "type": "着目語句",
      "q": "『ping』『traceroute』から判断するプロトコルは？",
      "choices": [
        "ICMP",
        "ARP",
        "RARP",
        "VRRP"
      ],
      "answer": "ICMP",
      "explain": "pingやtracerouteはICMPを使用する。",
      "point": "ping / traceroute",
      "topic": "NW5-6"
    },
    {
      "id": "NW5-Q14",
      "type": "条件判断",
      "q": "2台のルータを論理的に1台として見せ、デフォルトゲートウェイを冗長化するプロトコルは？",
      "choices": [
        "STP",
        "VRRP",
        "ARP",
        "PPP"
      ],
      "answer": "VRRP",
      "explain": "VRRPはネットワーク層機器の冗長化に使用される。",
      "point": "ルータ＋冗長化＋仮想",
      "topic": "NW5-6"
    },
    {
      "id": "NW6-Q01",
      "type": "比較",
      "q": "TCPとUDPの違いとして正しいものは？",
      "choices": [
        "TCP＝コネクション型・高信頼 / UDP＝コネクションレス・高速",
        "TCP＝コネクションレス / UDP＝コネクション型"
      ],
      "answer": "TCP＝コネクション型・高信頼 / UDP＝コネクションレス・高速",
      "explain": "TCPは信頼性重視、UDPは順序保証をせず処理コストが小さい。",
      "point": "信頼性 vs 処理速度",
      "topic": "NW6-1"
    },
    {
      "id": "NW6-Q02",
      "type": "数字",
      "q": "ウェルノウンポートの範囲は？",
      "choices": [
        "0～255",
        "0～1023",
        "1024～65535"
      ],
      "answer": "0～1023",
      "explain": "0～1023をウェルノウンポートという。",
      "point": "0～1023",
      "topic": "NW6-1"
    },
    {
      "id": "NW6-Q03",
      "type": "数字",
      "q": "HTTPSのポート番号は？",
      "choices": [
        "25",
        "53",
        "80",
        "443"
      ],
      "answer": "443",
      "explain": "HTTPSはTCP443番を使用する。",
      "point": "HTTPS＝443",
      "topic": "NW6-3"
    },
    {
      "id": "NW6-Q04",
      "type": "着目語句",
      "q": "『リアルタイム』『ストリーミング』『コネクションレス』から判断するものは？",
      "choices": [
        "TCP",
        "UDP"
      ],
      "answer": "UDP",
      "explain": "UDPは処理速度が速く、リアルタイム性が重要な通信で使われる。",
      "point": "リアルタイム→UDP",
      "topic": "NW6-1"
    },
    {
      "id": "NW6-Q05",
      "type": "並べ替え",
      "q": "TCP接続確立の正しい順序は？",
      "choices": [
        "SYN → SYN/ACK → ACK",
        "ACK → SYN → SYN/ACK",
        "FIN → ACK → FIN"
      ],
      "answer": "SYN → SYN/ACK → ACK",
      "explain": "3ウェイハンドシェイクの順序。",
      "point": "SYN→SYN/ACK→ACK",
      "topic": "NW6-2"
    },
    {
      "id": "NW6-Q06",
      "type": "四択",
      "q": "HTTPステータスコード404の意味は？",
      "choices": [
        "正しく表示",
        "アクセス禁止",
        "ページが見つからない",
        "サービスが一時的に利用不可"
      ],
      "answer": "ページが見つからない",
      "explain": "404はNot Found。",
      "point": "404＝Not Found",
      "topic": "NW6-3"
    },
    {
      "id": "NW6-Q07",
      "type": "比較",
      "q": "SMTPとPOPの違いとして正しいものは？",
      "choices": [
        "SMTP＝送信 / POP＝受信",
        "SMTP＝受信 / POP＝送信"
      ],
      "answer": "SMTP＝送信 / POP＝受信",
      "explain": "SMTPは電子メールの送信、POPは受信に利用される。",
      "point": "SMTP送信 / POP受信",
      "topic": "NW6-3"
    },
    {
      "id": "NW6-Q08",
      "type": "比較",
      "q": "POPとIMAPの違いとして正しいものは？",
      "choices": [
        "POP＝クライアントへダウンロード / IMAP＝サーバ上で操作・保存",
        "POP＝サーバ上で操作 / IMAP＝必ずダウンロード"
      ],
      "answer": "POP＝クライアントへダウンロード / IMAP＝サーバ上で操作・保存",
      "explain": "POPはクライアントにダウンロードして閲覧し、IMAPはサーバ上で操作・保存する。",
      "point": "DL vs サーバ上",
      "topic": "NW6-3"
    },
    {
      "id": "NW6-Q09",
      "type": "並べ替え",
      "q": "DHCPのメッセージ交換の正しい順序は？",
      "choices": [
        "DISCOVER → OFFER → REQUEST → ACK",
        "OFFER → DISCOVER → ACK → REQUEST",
        "REQUEST → OFFER → DISCOVER → ACK"
      ],
      "answer": "DISCOVER → OFFER → REQUEST → ACK",
      "explain": "DHCPのアドレス割当て手順。",
      "point": "DORA順序",
      "topic": "NW6-4"
    },
    {
      "id": "NW6-Q10",
      "type": "数字",
      "q": "DHCPサーバ宛とクライアント宛のポート番号の組合せは？",
      "choices": [
        "サーバ67 / クライアント68",
        "サーバ68 / クライアント67",
        "両方53"
      ],
      "answer": "サーバ67 / クライアント68",
      "explain": "DHCPサーバ宛はUDP67、クライアント宛はUDP68。",
      "point": "Server67 / Client68",
      "topic": "NW6-4"
    },
    {
      "id": "NW6-Q11",
      "type": "条件判断",
      "q": "DHCPでIPアドレス未割当てのクライアントが使う送信元IPと宛先IPは？",
      "choices": [
        "0.0.0.0 → 255.255.255.255",
        "127.0.0.1 → 0.0.0.0",
        "255.255.255.255 → 0.0.0.0"
      ],
      "answer": "0.0.0.0 → 255.255.255.255",
      "explain": "未割当てなので送信元0.0.0.0、宛先はブロードキャスト255.255.255.255。",
      "point": "0.0.0.0 / 255.255.255.255",
      "topic": "NW6-4"
    },
    {
      "id": "NW6-Q12",
      "type": "比較",
      "q": "通常のDNS名前解決とDNSサーバ間のゾーン転送の組合せとして正しいものは？",
      "choices": [
        "名前解決＝UDP53 / ゾーン転送＝TCP53",
        "名前解決＝TCP53 / ゾーン転送＝UDP53"
      ],
      "answer": "名前解決＝UDP53 / ゾーン転送＝TCP53",
      "explain": "通常の名前解決はUDP53、ゾーン転送はTCP53を使用する。",
      "point": "ゾーン転送だけTCP53",
      "topic": "NW6-5"
    }
  ]
};
