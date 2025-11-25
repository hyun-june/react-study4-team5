<h1>코딩알려주는누나 리액트 스터디 4기 5조</h1>

# TravelNow

오늘의 여행 추천

<br/>

## 링크

- [배포](https://travelnow2025.netlify.app/)
- [Figma](https://www.figma.com/design/ExvgxzsiLglcdW0iRWgS8D/%EB%A6%AC%EC%95%A1%ED%8A%B8-4%EA%B8%B0-5%EC%A1%B0?node-id=0-1&p=f&t=2qNgRmpgYR4AWUy2-0)
- [테스트 배포(dev 브랜치)](https://travelnowtest.netlify.app/)
  <br/><br/>

## 프로젝트 소개

### 주제

글로벌 여행 추천

### 목적

나라 별 환율, 이미지를 한 사이트에서 볼 수 있다.
궁금한 점은 AI를 통해 해결할 수 있다.

## 개발 기간

2025년 11월 16일 일요일 ~ 2025년 11월 23일 일요일 (총 8일)
<br/><br/>

## Team

| <img src="https://avatars.githubusercontent.com/u/154816149?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/154667059?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/103065628?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/61533589?v=4" width="150" height="150"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|              [@victoryalhj](https://github.com/victoryalhj)<br/>Product Owner               |                 [@hyun-june](https://github.com/hyun-june)<br/>Scrum Master                 |                   [@JiHyoung](https://github.com/JiHy0ung)<br/>Developer                    |                    [@joooo24](https://github.com/joooo24)<br/>Developer                    |

<br/>

## 기능

<ul>
  <li>메인 페이지 랜덤 배너이미지</li>
  <li>간단한 AI 플로팅 버튼을 통해 대화를 할 수 있다.</li>
  <li>Zustand를 통한 로그인 흉내</li>
  <li>국가를 검색해 해당 국가에 대한 자세한 내용을 볼 수 있다.</li>
</ul>
<br/><br/>

## API

- REST Countries
- OpenWeatherMap
- Pexels API
- Gemini API
- 공공데이터 포털 한국수출입은행 환율 정보 오픈 API

## 라이브러리

- react-router
- react-multi-carousel
- react-query
- Mui
- zustand
- axios
- google-genai

## 스탠드업 미팅

- 21:30분

## 회의록

<details>
  <summary><b>2025년 11월 16일 일요일 22:00 (1일차) </b></summary>
  <ul> 
    <li>주제 생각해오기</li>
    <li>피그마 만들기</li>
    <li>깃 만들기</li>
  </ul>

</details>
<details>
  <summary><b>2025년 11월 17일 월요일 14:30 (2일차)</b></summary>
  <ul>
    <li>여행지 추천 사이트로 주제 확정</li>
    <li>
      사용 라이브러리 정하기
      <ul>
        <li>Zustand</li>
        <li>React Router</li>
        <li>MUI</li>
      </ul>
    </li>
    <li>각 컨베션 및 폴더 구조 정함</li>
  </ul>
</details>
<details>
  <summary><b>2025년 11월 17일 월요일 20:30 (2일차)</b></summary>
  <ul>
    <li>
      역할 분배
      <ul>
        <li>지형님  - 환율 api + 헤더 /푸터</li>
        <li>현정님 - 이미지 api + 상세 페이지 레이아웃</li>
        <li>희정님 - 국가 정보 api  + 메인 페이지 레이아웃</li>
        <li>현준님 - 날씨 api, AI API + 로그인 페이지 레이아웃</li>
      </ul>
    </li>
    <li>다음 회의에 더 자세한 역할 분배 필요</li>
  </ul>
</details>
<details>
  <summary><b>2025년 11월 18일 화요일 20:00 (3일차)</b></summary>
  <ul>
    <li>
      프로젝트 이름:  TravelNow
    </li>
    <li>
      api 호출 성공
    </li>
    <li>
      자세한 역할 분담
      <ul>
        <li>지형님 - 메인 페이지 및 환율 관련 컴포넌트 개발</li>
        <li>현정님 - 상세 페이지 개발</li>
        <li>희정님 - 카드 컴포넌트 개발</li>
        <li>현준님 - AI 봇 컴포넌트 개발</li>
      </ul>
    </li>
  </ul>
</details>
<details>
  <summary><b>2025년 11월 19일 수요일 13:30 (4일차)</b></summary>
  <ul>
    <li>진행 사항 체크(현준님,희정님,지형님)</li>
    
  </ul>
</details>
<details>
  <summary><b>2025년 11월 20일 목요일 20:00 (5일차)</b></summary>
  <ul>
    <li>진행 사항 체크(현준님,현정님,지형님)</li>
  </ul>
</details>
<details>
  <summary><b>2025년 11월 22일 토요일 19:00 (7일차)</b></summary>
  <ul>
    <li>모든 코드 dev에 업로드 후 테스트 배포로 오류 및 수정 사안 확인</li>
    <li>
      수정 사안
      <ul>
        <li>Home(현준님)
        <ul>
          <li>카드 슬라이더에  카드를 누르면 상세 페이지로 이동하게</li>
        </ul>
        </li>
            <li>Cities(현준님)
        <ul>
          <li>카드 로딩 및 동일한 카드 랜더 -> 이미지 없으면 기본 이미지 넣으면 좋을듯
</li>
        </ul>
        </li>
            <li>Detail(현정님)
        <ul>
          <li>로딩 스피너가 헤더 뒤에 나옴</li>
          <li>환율 정보</li>
          <li>캐러셀 추가(작업중)</li>
        </ul>
        </li>
            <li>Comp(지형님)
        <ul>
          <li>검색 시 디테일 페이지로 연결</li>
           <li>모바일 로그인 버튼 구현 필요</li>
        </ul>
        </li>
        <li>발표 준비(희정님)
        <ul>
          제출 내용
          <li>각자 경력, 배경</li>
           <li>내가 해결하려 했던 문제</li>
           <li>느낀점 (짧게 팀원별 느낀점)</li>
        </ul>
        </li>
      </ul>
    </li>
  </ul>
</details>

## 개발 일지

<details>
  <summary><b>2025년 11월 16일 일요일 (1일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
            Git repository 생성
           </li>
           <li>
             Figma 생성
           </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
        <ul>
           <li>
             팀원 역할 뽑기
           </li>
           <li>
             Figma로 Product Backlog 만들기
           </li>
           <li>
             깃 폴더 구조 정하기
           </li>
           <ol>
             Main - 최종 배포 브랜치<br/>
             develop - 2차 테스트 브랜치<br/>
             dev-페이지명 (1차 각 페이지별 테스트, 각 페이지별 기능의 상위 브랜치)<br/>
             dev-페이지명 - 기능 - v1(버전)<br/>
           </ol>
            <li>
             코드 컨벤션 정하기
           </li>
           <ol>
             커밋 컨벤션<br/>
             네이밍 컨벤션
           </ol>
         </ul> 
        </div>
    </details>  
</details>
<details>
  <summary><b>2025년 11월 17일 월요일 (2일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
             팀원 역할 뽑기
           </li>
           <li>
             Figma로 Product Backlog 만들기
           </li>
           <li>
             깃 폴더 구조 정하기
           </li>
           <ol>
             Main - 최종 배포 브랜치<br/>
             develop - 2차 테스트 브랜치<br/>
             dev-페이지명 (1차 각 페이지별 테스트, 각 페이지별 기능의 상위 브랜치)<br/>
             dev-페이지명 - 기능 - v1(버전)<br/>
           </ol>
            <li>
             코드 컨벤션 정하기
           </li>
           <ol>
             커밋 컨벤션<br/>
             네이밍 컨벤션
           </ol>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
         <ul>
           <li>자세한 역할 분담</li>
         </ul> 
        </div>
    </details>  
    </details> 
<details>
  <summary><b>2025년 11월 18일 화요일 (3일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
            <li>
              프로젝트 이름:  TravelNow
            </li>
            <li>맡은 api 호출 성공 여부 확인</li>
          <li>
          자세한 역할 분담
        <ul>
         <li>지형님 - 메인 페이지 및 환율 관련 컴포넌트 개발</li>
          <li>현정님 - 상세 페이지 개발</li>
          <li>희정님 - 카드 컴포넌트 개발</li>
         <li>현준님 - AI 봇 컴포넌트 개발</li>
        </ul>
         </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
         <ul>
           <li>진행 사항 체크</li>
           <li>추가 업무 분담</li>
         </ul> 
        </div>
    </details>
      </details>   
     <details>
  <summary><b>2025년 11월 19일 수요일 (4일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
            <li>
              지형님 - 환율 계산기 컴포넌트 개발 완료
            </li>
            <li>
              희정님 - 카드 컴포넌트 개발 완료 및 리스트 페이지 추가 업무 분담
            </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
         <ul>
           <li>현정님 - 상세 페이지 개발 진행도 체크</li>
           <li>현준님 - AI 봇 컴포넌트 개발 진행도 체크</li>
         </ul> 
        </div>
    </details>  
</details>

<details> 
  <summary><b>2025년 11월 20일 목요일 (5일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
          <li>
              진행 사항 공유
          </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
         <ul>
       <li>
          <li>지형님 - 메인 페이지 반응 형 및 검색 기능 구현</li>
                <li>현정님 - city list 페이지 개발</li>
                <li>희정님 - detail 페이지 개발</li>
                <li>현준님 - AI 챗 및 로그인 페이지 디자인 수정</li>
        </li>
         </ul> 
        </div>
    </details>  
</details>
<details> 
  <summary><b>2025년 11월 21일 금요일 (6일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
          <li>
              dev 브랜치 테스트 배포 완료
            </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
         <ul>
       <li>
       개발 진행
            </li>
         </ul> 
        </div>
    </details>  
</details>
<details> 
  <summary><b>2025년 11월 22일 토요일 (7일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
          <li>
              dev에 업로드 후 테스트 배포 오류 테스트 및 시간
            </li>
              <li>
              수정 사안 역할 분배
            </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
         <ul>
        <li>Home(현준님)
        <ul>
          <li>카드 슬라이더에  카드를 누르면 상세 페이지로 이동하게</li>
        </ul>
        </li>
           <li>FloatingAiButton(현준님)
        <ul>
          <li>채팅창 크기 수정</li>
        </ul>
        </li>
            <li>Cities(현준님)
        <ul>
          <li>카드 로딩 및 동일한 카드 랜더 -> 이미지 없으면 기본 이미지 넣으면 좋을듯
</li>
        </ul>
        </li>
            <li>Detail(현정님)
        <ul>
          <li>로딩 스피너가 헤더 뒤에 나옴</li>
          <li>환율 정보</li>
          <li>캐러셀 추가(작업중)</li>
        </ul>
        </li>
            <li>Comp(지형님)
        <ul>
          <li>검색 시 디테일 페이지로 연결</li>
           <li>모바일 로그인 버튼 구현 필요</li>
        </ul>
        </li>
        <li>발표 준비(희정님)
        <ul>
          <li>팀원 소개</li>
           <li>내가 해결하려 했던 문제</li>
           <li>협업 과정( git, figma, readme)</li>
          <li>데모</li>
           <li>느낀점 (짧게 팀원별 느낀점)</li>
        </ul>
        </div>
    </details>
</details>
</details>

<br/>

### 문제 해결

##

<h4>유지형</h4>
- 환율 계산기 기능을 구현하는 과정에서 적절한 환율 api를 선정하는데 어려움이 있었습니다.
무료로 사용가능하면서 신뢰할 수 있는 실시간  환율 데이터를 제공하고 호출 횟수 제한에서 자유로운 API를 찾아야했습니다.
여러 후보 중 한국 수출입은행 API를 선정했고
자주 변하지 않는 환율 데이터 특성상 stale time 을 설정하므로 성능과 데이터의 신선도의 균형을 맞췄습니다.
한국 수출입은행 API는 영업일 기준으로 데이터를 제공하기 때문에 주말에는 데이터가 업데이트되지 않음에 따라
사용자 경험을 개선하기 위해 주말에는 자동으로 가장 최근 영업일인 금요일의 환율 데이터를 조회하도록 날짜 로직을 수정하고
오전 11시 이전에는 당일 데이터가 아직 업데이트 되지 않음으로 전일 데이터를 조회하는 기존 로직과 결합하여
사용자의 안정적인 데이터 조회 시스템을 구축했습니다.
또한 프론트엔드에서 직접 외부 API를 호출할 때 브라우저의 보안 정책으로 요청이 차단되는 CORS 문제가 발생했습니다.
이를 해결하기 위해 프록시 서버 설정을 통해 이를 우회하는 방법을 적용하여 API 호출 문제를 해결했습니다.

<h4>이현준</h4>
- 각 TravelCard 컴포넌트가 개별적으로 나라 데이터를 호출하는 구조였습니다. 이로 인해 api 호출이 과도하게 발생하여 횟수 제한에 쉽게 도달했습니다. 
카드별 개별 호출 방식 때문에 UI가 순차적으로 로딩되어 페이지가 한번에 완성되지 않고 부자연스럽게 렌더링되는 문제가 있었습니다.

TravelCard 컴포넌트에서 데이터 호출을 사용하지 않고, 상위 페이지에서 데이터를 가져오도록 변경하여 TravelCard에 재사용성을 높였습니다.
기존 객체 배열 형태였던 cityData를 단순한 나라 이름 문자열 배열로 변경하고, 이 배열을 기반으로 useQueries를 사용하여 필요한 모든 데이터를 일괄적으로 가져오도록 API호출 방식을 변경했습니다.
React Query의 캐싱 기능을 활용하여 데이터를 유지하고 불필요한 재호출을 방지했습니다.

이를 통해 API 호출 제한 문제를 해결하고 캐싱된 데이터를 통해서 페이지 로딩 성능을 높였습니다. 모든 카드 데이터가 준비된 후 렌더링되므로, UI가 자연스럽게 나타나 사용자 경험을 개선했습니다. 데이터와 UI를 분리하여 컴포넌트의 재사용성을 높일 수 있었습니다.

<h4>이희정</h4>
- 로컬에서 정상 작동하던 코드가 배포 환경에서 이미지 로딩 오류와 같은 문제를 일으키는 경우가 잦았습니다. 
혼자 해결하기 어려웠던 부분을 팀원의 도움을 받으면서 해결할수 있었고 오류로그를 확인하는 방법을 배울수 있었습니다.

초반에 단순한 카드형태로 구현했던 영역을 슬라이드 기능을 추가하는 과정이 쉽지 않았습니다.
이를 개선하기 위해서 기존의 카드 로직을 건드리지 않고 새로운 슬라이드 기능을 감싸는 방식으로 진행했습니다.

MUI와 같이 처음 접해보는 라이브러리들을 숙지해가면서 프로젝트를 진행했는데,
시간이 처음에는 많이 소요되다가 추후에는 CSS파일을 따로 만들지 않고 작업할수 있어서 시간을 단축할수 있었습니다.

<h4>주현정</h4>
- 도시 상세 페이지에서 이미지, 비디오, 날씨, 국가 정보, AI 설명 등 여러 API를 동시에 호출해 초기 로딩이 길어졌습니다. 전체 데이터가 로드될 때까지 빈 화면이 보여 사용자 경험이 좋지 않았습니다.이를 개선하기 위해 컴포넌트 단위로 로딩 스피너를 적용하여 각 데이터가 준비되는 대로 표시되도록 했습니다. 또한 반복되는 로딩 UI는 공통 패턴으로 정리하고, API 호출 로직은 커스텀 훅으로 분리해 재사용성을 높였습니다. React Query의 staleTime을 설정해 캐싱을 활용하여 이미지/비디오, 날씨, 국가 정보의 불필요한  재호출을 줄였습니다. 이를 통해 사용자는 전체 데이터가 로드될 때까지 기다리지 않고, 각 섹션이 준비되는 대로 콘텐츠를 볼 수 있게 되었습니다.

### 프로젝트 후기

##

<h4>유지형</h4>
- 이번 프로젝트를 통해 사용자 관점에서의 디자인과 컴포넌트 재사용성에 대해 깊이 생각해보는 계기가 되었습니다.
단순히 기능 구현하는 것을 넘어 사용자가 직관적으로 이해하고 편리하게 사용할 수 있는 인터페이스를 만드는 것이 얼마나 중요한지 깨달았습니다.
그리고 팀원들 모두 일정에 성실히 임해주어 처음에 기획했던 프로젝트를 차질 없이 완성할 수 있어 모두에게 감사드리고 협업의 중요성에 대해 다시 한번 느끼게 되었습니다.
<h4>이현준</h4>
- 이번 프로젝트에서 채택한 팀 협업 방식은 프로젝트의 효율성과 완성도를 높이는데 도움이 되었다고 생각합니다. 페이지별 브랜치 전략을 통해 코드를 합치는 과정에서 오류가 발생하지 않아,낭비되는 시간 없이 개발 시간을 확보할 수 있었습니다. 팀원들이 자신의 의견을 자유롭게 공유하고, 건설적인 피드백을 통해 디테일을 발견하고 완성도를 높일 수 있었다고 생각합니다. 
체계적인 협업 전략과 지속적이고 적극적인 소통이 성공적인 결과물을 만드는 데 중요하다는 점을 다시 한번 깨달았습니다. 시차가 있음에도 팀원들의 적극적인 참여가 좋은 결과물을 만든 것 같습니다. 다들 너무 고생 많으셨습니다. 
유지형 — 오후 12:15
<h4>이희정</h4>
- 페이지 브랜치 전략과 지속적인 의사소통으로 머지과정에서 오류가 적었던것 같습니다.
깃을 사용하는게 쉽지않은데, 팀프로젝트를 하면서 팀원분들이 많이 도와주셔서 좋은 결과를 만들수 있었습니다.
팀원들 모두 바쁘시고 제가 시차가있어 회의시간을 맞추기 힘들었는데, 모두들 배려를 해주셔서 하루에 2번정도 미팅을하면서 죄송하면서도 감사했습니다. 능력자 분들과 함꼐 프로젝트 할수있어서 너무 좋았습니다.
<h4>주현정</h4>
- 이번 프로젝트를 통해 사용자 경험을 고려한 UI 설계와 컴포넌트 재사용성의 중요성을 다시 깨달았습니다. 사용자가 기다리는 시간을 줄이고, 각 데이터가 준비되는 대로 보여주는 점진적 로딩이 중요함을 알았습니다. 무엇보다 팀원들이 회의 시간을 지켜주시고 맡은 역할을 책임감 있게 수행해주셔서 프로젝트가 수월하게 진행되었습니다. 협업의 중요성과 원활한 소통이 좋은 결과를 만든다는 점을 다시 한번 느꼈습니다.
