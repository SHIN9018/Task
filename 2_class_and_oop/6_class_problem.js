/**
 * 클래스 문제
 * 
 * 1)Country 클래스는 나라 이름 나라에 해당되는 아이돌 그룹 정보를
 * 리스트로 들고 있다 (name 프로퍼티, idolGroups 프로퍼티 )
 * 
 * 2)IdoGroup 클래래스는 아이돌 그룹 이름과 멤버 정보를 리스트로 들고있다
 * 
 * 3)Idol 클래스는 아이돌 이름 출생년도 정보를 들고있다
 * 
 * 4) MaleIdol 클래스는 Idol 클래스와 동일하게
 * name, year 프로퍼티가 존재한다
 * 추가로 Sing()함수를 실행하면 ${이름}이 노래를 합니다
 * 라는 스트링을 반환해준다
 * 
 * 5)FemaleIdol 클래스는 Idol 클래스와 동일하게
 * name, year 프로퍼티가 존재한다
 * 추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다
 * 라는 스트링을 반환한다 
 */
const iveMembers = [{
        name: '안유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '레이',
        year: 2004,
    },
    {
        name: '장원영',
        year: 2004,
    },
    {
        name: '리즈',
        year: '2004',
    },
    {
        name: '이서',
        year: 2007,
    },
]
// bts는 한국 아이돌이고
// 방탄소년단이라는 이름의 그룹이다
// bts는 남자 아이돌이다

const btsMembers = [{
        name: '진',
        year: 1992,
    },
    {
        name: '슈가',
        year: 1993,
    },
    {
        name: '제이홉',
        year: 1994,
    },
    {
        name: 'RM',
        year: 1994,
    },
    {
        name: '지민',
        year: 1995,
    },
    {
        name: '뷔',
        year: 1995,
    }, {
        name: '정국',
        year: 1997,
    },
]

class Country {
    name;
    idolGrops;

    constructor(name, idolGrops) {
        this.name = name;
        this.idolGrops = idolGrops;
    }
}
class idolGrop {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}
class idol {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdol extends idol {
    constructor(name, year) {
        super(name, year)
    }

    dance() {
        return `${this.name}이 춤을 춥니다`
    }
}

class MaleIdol extends idol {
    constructor(name, year) {
        super(name, year);
    }

    sing() {
        return `${this.name}이 노래를 합니다.`
    }
}

//map() 활용으로 간편한 객체 반환
const cIveMembers = iveMembers.map(
    (x) => new FemaleIdol(x['name'], x['year']),
);
console.log(cIveMembers);

const cBtsMembers = btsMembers.map(
    (x) => new MaleIdol(x['name'], x['year']),
);
console.log(cBtsMembers);


const iveGroup = new idolGrop(
    '아이브', //name
    cIveMembers, //members
)
console.log(iveGroup); //map을 이용해 객체를 반환받은 cIveMembers
//사용해 members 를 간단히 정리
const btsGrop = new idolGrop(
    'bts',
    cBtsMembers,
)
console.log(btsGrop);

const korea = new Country(
    '대한민국',
    [
        iveGroup,
        btsGrop,
    ]
)
console.log(korea);

// 위에로직을 한번에 줄여서 사용 하는 궁극의 방법
const allTogether = new Country(
    '대한민국' [
        new idolGrop(
            '아이브',
            iveMembers.map(
                (x) => new FemaleIdol(x['name'], x['year']),
            ),
        ),

        new idolGrop(
            '방탄소년단',
            btsMembers.map(
                (x) => new MaleIdol(x['name'], x['year'])
            )
        )
    ]
)