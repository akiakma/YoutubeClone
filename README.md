배포한 사이트는 아래의 주소에서 확인하실 수 있습니다. https://akiakma.github.io/YoutubeClone/

## YoutubeClone(Search & List)


## 소개

유투브에서 제공하는 APIs를 이용하여 간단한 유투브 검색기능 클론 코딩을 진행 하였습니다.


### 구현

유투브를 간단하게 클론해보았습니다. 첫 화면에서는 유투브 APIs를 이용하여 MostPopular 25가지를 기본적으로 표시합니다.
검색후 검색버튼(엔터)을 클릭시 25가지의 검색관련된 리스트를 띄웁니다.
리스트에서 원하는 영상을 클릭시 상세화면이 표시됩니다. 
상세화면에는 APIs에서 제공하는 Yotube iFrame을 이용하여 video player를 표시하고 우측에는 리스트들이 첫화면처럼 두줄이 아닌,
한줄로 표시됩니다. 반응형을 추가하여 상세화면에서 화면을 줄일시 video player 아래로 리스트들이 나열됩니다.

### 사용한 기술

•	React Hooks

•	React.memo()

•	useEffect

•	Postman

• Public APIs

•	Axios

•	Fetch

•	PostCSS

### 어려웠던 점

사실 바로 앞서 만들었던 habit-tracker와 다른점은 1.외부 APIs를 사용했다는 것, 그리고 2.Class컴포넌트가 아닌 함수형 컴포넌트를 사용했다는 것 입니다.
클래스 컴포넌트에 비해서 함수형이 더 간단하고 쉽게 느껴졌습니다. 함수형 컴포넌트에서 특히 componenetDidUpdate와 componentWillUpdate 부분이 처음에는 
긴 용어때문인지 잘 이해가 안됬지만, useEffect에서 콜백함수로 랜더시 다시 불러오는 부분은 훨씬 간결하고 이해하기 쉬웠습니다. fetch를 예전에 사용해 본적이 있어서
fetch를 먼저 사용해봤고 프로젝트 완료후 axios라이브러리를 추가하여 두가지 모두 사용해 보았습니다. 외부 APIs를 사용해본건 GoogleMaps와 KakaoMaps인데 처음에 APIs의 parameter
값을 설정하는 부분이 헷갈려서 많이 헤맸습니다. 리액트가 많이 익숙하지않는데, 최상위 부모 컴포넌트에서 하위 컴포넌트들에게 state값을 props로 전달해줄때, 특히 그 깊이가 깊어질수록 그리고,
이벤트 처리에서 클릭함수 인자값으로 props들을 전달해줄때는 매번 해매는 것 같습니다. 그리고 앞서 사용했던 React.PureComponent와 React.memo()를 활용하여 리렌더시 렌더가 필요없는 부분의 
랜더를 방지하는데 아직 사용하는데 있어 미숙함이 있어 더 공부가 필요한 것 같습니다.
앞으로는 Hooks를 좀더 깊게 공부해서 숙달될수있도록 해야할 것 같고, Redux에 대해서도 공부해야 할 것 같습니다.


