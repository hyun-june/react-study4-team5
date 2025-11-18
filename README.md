<h1>코딩알려주는누나 리액트 스터디 4기 5조</h1>

# TravelNow

슬로건

<br/>

## 링크

- [배포]()
- [Figma](https://www.figma.com/design/ExvgxzsiLglcdW0iRWgS8D/%EB%A6%AC%EC%95%A1%ED%8A%B8-4%EA%B8%B0-5%EC%A1%B0?node-id=0-1&p=f&t=2qNgRmpgYR4AWUy2-0)
  <br/><br/>

## 프로젝트 소개

### 주제

글로벌 여행 추천

### 목적

사이트 목적

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
  <li>기능 1</li>
  <li>기능 2</li>
  <li>기능 3</li>
  <li>기능 4</li>
</ul>
<br/><br/>

## API

- REST Countries
- OpenWeatherMap
- ExchangeRate.host
- Unsplash API
- AI API(미정)

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
           <li>내용 추가</li>
         </ul> 
        </div>
    </details>  
</details>

<br/>

### 프로젝트 후기

##

<h4>유지형</h4>
- 
<h4>이현준</h4>
- 
<h4>이희정</h4>
- 
<h4>주현정</h4>
-
