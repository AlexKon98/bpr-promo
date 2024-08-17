import playlists from './playlistsPages';

type PlaylistDetailPages = keyof typeof playlists;
type ClickActions = 'click' | 'yandex' | 'ozon';
type Pages = PlaylistDetailPages | 'products';

const tagMap: Record<Pages, Record<string, Record<ClickActions, string>>> = {
    evening: {
        'Пилинг-маска': {
            click: 'blfrhken',
            ozon: 'dqltynpv',
            yandex: 'pznbrkmd',
        },
        '<p>Лосьон-тоник отшелушивающий</p> <p>PEELING EXPERT</p>': {
            click: 'wapzlgbs',
            ozon: 'zmxwiugs',
            yandex: 'lbrstnfh',
        },
        'Сыворотка с коллагеном': {
            click: 'oqdktjei',
            ozon: 'cbshftrv',
            yandex: 'uaztmdxq',
        },
        'Сыворотка-бустер Увлажняющая': {
            click: 'vuncgxfq',
            ozon: 'zqvxupgf',
            yandex: 'qhbpyvci',
        },
        'Роллер под глаза': {
            click: 'ravjmhui',
            ozon: 'kadlyiwm',
            yandex: 'ngpurexb',
        },
        'Дневной крем для лица для зрелой кожи SPF 30': {
            click: 'epwlkxvo',
            ozon: 'rjlxgoei',
            yandex: 'iosztdwq',
        },
        '<p>Крем-скульптор для лица и шеи</p> <p>LiftACTIVATOR</p>': {
            click: 'gfjbzera',
            ozon: 'oshjipwq',
            yandex: 'mvaybier',
        },
    },
    womans: {
        'Пилинг-маска': {
            click: 'zkipws',
            ozon: 'tdxpyjfs',
            yandex: 'rnvzkjeg',
        },
        '<p>ПИЛИНГ-СКАТКА</p> <p>PEELING EXPERT</p>': {
            click: 'dghvmslx',
            ozon: 'zihukonm',
            yandex: 'aulwgfsy',
        },
        'Роллер под глаза': {
            click: 'qvxioruf',
            ozon: 'majsebox',
            yandex: 'zvdfqytc',
        },
        'Сыворотка-бустер Увлажняющая': {
            click: 'epztlkbw',
            ozon: 'punrfemv',
            yandex: 'bjknxuro',
        },
        'Дневной крем для лица для зрелой кожи SPF 30': {
            click: 'oinhuxas',
            ozon: 'lhsdvczu',
            yandex: 'otszixdl',
        },
        'CC-крем для лица для всех типов кожи': {
            click: 'jgvwizsb',
            ozon: 'wxjnlbfp',
            yandex: 'yjrqkpln',
        },
        '<p>Ночная крем-маска</p> <p>LiftACTIVATOR</p>': {
            click: 'necblfrd',
            ozon: 'etioqdnc',
            yandex: 'ujtvckmp',
        }
    },
    relax: {
        'Пилинг-маска': {
            click: 'fzkxtnjc',
            ozon: 'vfyitgqk',
            yandex: 'bdkvcfet',
        },
        'Сыворотка с коллагеном': {
            click: 'oadgkepf',
            ozon: 'lzxwpdqr',
            yandex: 'yjqelabd',
        },
        'Роллер под глаза': {
            click: 'tvonhuwb',
            ozon: 'aktovlzi',
            yandex: 'thgzcyun',
        },
        '<p>Ночная крем-маска</p> <p>LiftACTIVATOR</p>': {
            click: 'bjxdrwse',
            ozon: 'erjiwzxm',
            yandex: 'waqruble',
        }
    },
    meeting: {
        'Пилинг-маска': {
            click: 'ophjmyet',
            ozon: 'ncfuiz',
            yandex: 'yktdzrpg',
        },
        '<p>ПИЛИНГ-СКАТКА</p> <p>PEELING EXPERT</p>': {
            click: 'rkyfnbdi',
            ozon: 'drxkvysq',
            yandex: 'jqlrmbwv'
        },
        'Сыворотка-бустер Увлажняющая': {
            click: 'txjhzpvc',
            ozon: 'wbnrmxhe',
            yandex: 'zex',
        },
        'Роллер под глаза': {
            click: 'bfgpcolv',
            ozon: 'sxykiebr',
            yandex: 'nogmehri'
        },
        'База под макияж': {
            click: 'zkxqdeaw',
            ozon: 'qgikdzsc',
            yandex: 'utcziaxj'
        },
        'CC-крем для лица для всех типов кожи': {
            click: 'lweiuvkh',
            ozon: 'hjbfvmal',
            yandex: 'gvjyqorc'
        },
        '<p>Крем-скульптор для лица и шеи</p> <p>LiftACTIVATOR</p>': {
            click: 'yqrvwdst',
            ozon: 'pmezwouc',
            yandex: 'ioadjmbc'
        },
        '<p>Ночная крем-маска</p> <p>LiftACTIVATOR</p>': {
            click: 'akxgsqro',
            ozon: 'rqwbixlk',
            yandex: 'xbfroclv'
        }
    },
    products: {
        '<p>Пилинг-маска обновляющая</p> <p>PEELING EXPERT</p>': {
            click: 'rsqfpcvx',
            ozon: 'vedjox',
            yandex: 'novqel'
        },
        '<p>ПИЛИНГ-СКАТКА</p> <p>PEELING EXPERT</p>': {
            click: 'gclvioky',
            ozon: 'rulqaz',
            yandex: 'xubfiz'
        },
        '<p>Лосьон-тоник отшелушивающий</p> <p>PEELING EXPERT</p>': {
            click: 'mqb',
            ozon: 'tokfep',
            yandex: 'dapmob'
        },
        'Сыворотка-бустер Увлажняющая': {
            click: 'yorran',
            ozon: 'yelwag',
            yandex: 'zetmak'
        },
        'Сыворотка-бустер Восстанавливающая': {
            click: 'mibhat',
            ozon: 'gucpin',
            yandex: 'rigval'
        },
        'Дневной крем для лица для зрелой кожи SPF 30': {
            click: 'keljoa',
            ozon: 'mibqaz',
            yandex: 'lozqep'
        },
        'Дневной крем для лица для молодой кожи SPF 30': {
            click: 'zupcin',
            ozon: 'jomrix',
            yandex: 'jinced'
        },
        'CC-крем для лица для всех типов кожи': {
            click: 'hvagor',
            ozon: 'tofber',
            yandex: 'bapneg'
        },
        'База под макияж': {
            click: 'wistop',
            ozon: 'zilcup',
            yandex: 'xonlav'
        },
        '<p>Ночная крем-маска</p> <p>LiftACTIVATOR</p>': {
            click: 'jemfus',
            ozon: 'pecgon',
            yandex: 'vuroxj'
        },
        '<p>Дневной крем-филлер</p> <p>LiftACTIVATOR</p>': {
            click: 'nadkim',
            ozon: 'boqtam',
            yandex: 'metqaz'
        },
        '<p>Крем-эксперт для кожи вокруг глаз</p> <p>LiftACTIVATOR</p>': {
            click: 'qubves',
            ozon: 'luxkav',
            yandex: 'yogpev'
        },
        '<p>Крем-скульптор для лица и шеи</p> <p>LiftACTIVATOR</p>': {
            click: 'lozcer',
            ozon: 'qilfed',
            yandex: 'bucmar'
        },
        'Гель-пилинг для глубокого*  очищения и отшелушивания': {
            click: 'bapwun',
            ozon: 'wopqaz',
            yandex: 'zilrub'
        },
        '<p>Сплэш-маска для лица и шеи</p> <p>LiftACTIVATOR</p>': {
            click: 'xircal',
            ozon: 'vixmop',
            yandex: 'wevkor'
        }
    }
}

const playlistsPageTags: Record<PlaylistDetailPages, string> = {
    evening: 'mayzrcoq',
    relax: 'tdsyrnjk',
    womans: 'uqwtjsoc',
    meeting: 'gfxlqjae'
}

const tagsOnReturnToIndex = {
    '/products': 'utrnpekl'
}

export function getProductMetrikaTag(page: Pages, productName: string, action: ClickActions): string | undefined {
    return tagMap[page][productName][action];
}

export function getTagOnDifferentPlaylistClick(page: PlaylistDetailPages): string {
    return playlistsPageTags[page];
}
