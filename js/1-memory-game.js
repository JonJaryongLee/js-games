// data
const cardArray = [
  {
    name: "cat",
    img: "../public/1-memory-game/cat.png",
    id: null,
  },
  {
    name: "cat",
    img: "../public/1-memory-game/cat.png",
    id: null,
  },
  {
    name: "dog",
    img: "../public/1-memory-game/dog.png",
    id: null,
  },
  {
    name: "dog",
    img: "../public/1-memory-game/dog.png",
    id: null,
  },
  {
    name: "elephant",
    img: "../public/1-memory-game/elephant.png",
    id: null,
  },
  {
    name: "elephant",
    img: "../public/1-memory-game/elephant.png",
    id: null,
  },
  {
    name: "hedgehog",
    img: "../public/1-memory-game/hedgehog.png",
    id: null,
  },
  {
    name: "hedgehog",
    img: "../public/1-memory-game/hedgehog.png",
    id: null,
  },
  {
    name: "pig",
    img: "../public/1-memory-game/pig.png",
    id: null,
  },
  {
    name: "pig",
    img: "../public/1-memory-game/pig.png",
    id: null,
  },
  {
    name: "squirrel",
    img: "../public/1-memory-game/squirrel.png",
    id: null,
  },
  {
    name: "squirrel",
    img: "../public/1-memory-game/squirrel.png",
    id: null,
  },
];
// 파싱한 DOM 정보
const gameDOM = [];

// function

// DOM 정보를 작업하기쉽게 미리 파싱
const getGameDOM = () => {
  // querySelectorAll 사용 시, 이렇게 두 개를 띄워서 쓰면
  // container 클래스 안에 있는 row 클래스를 전부 다 가져오라는 뜻.
  // querySelector 역시 마찬가지로 사용 가능
  const rows = document.querySelectorAll(".container .row");
  // rows 는 정확히 말하면 배열이 아니고 NodeList 이기 때문에 map 사용 못함.
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
  }
};

// cardArray 에 DOM 위치에 알맞은 id 부여함.
const setIDtoCardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";
  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";
  cardArray[8].id = "2-0";
  cardArray[9].id = "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
};

// 물음표로 가득 찬 게임판 생성
const createBoard = () => {
  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      // img 태그를 만들어서 card 안에 담는다.
      const card = document.createElement("img");
      // card(img태그) 에 속성(attribute) 추가함
      // 첫번째로, 물음표 이미지의 경로
      card.setAttribute("src", "../public/1-memory-game/Question-Mark.png");
      // 두번째로, data-id 라는 속성이 있는데 이것은 행과 열로 이루어진 칸의 주소라고 생각하자
      card.setAttribute("data-id", `${i}-${j}`);
      // 이렇게 만들어진 card(img태그) 를 각각의 칸에 집어넣는다.
      gameDOM[i][j].appendChild(card);
    }
  }
};

// 클릭하면 뒤집기
const flip = (location) => {
  const id = cardArray[location].id;
  // 만약 1-2 로 되어있으면, [1, 2] 로 분리됨
  const parsedId = id.split("-");
  // 이미지 교체
  gameDOM[parsedId[0]][parsedId[1]].querySelector("img").src =
    cardArray[location].img;
};

// 맨 처음 자동으로 실행됨
onload = () => {
  // DOM 정보를 작업하기쉽게 미리 가져옴
  getGameDOM();
  // 배열을 섞을 때 이런식으로 사용한다. 궁금하면 찾아보기.
  // sort 이후 원래 배열은 바뀐다.
  cardArray.sort(() => 0.5 - Math.random());
  // cardArray 에 DOM 위치에 알맞은 id 부여함.
  setIDtoCardArray();
  // 물음표로 가득 찬 게임판 생성
  createBoard();
};
