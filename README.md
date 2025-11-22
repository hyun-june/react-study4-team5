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
    <li>진행 사항 체크</li>
    
  </ul>
</details>
<details>
  <summary><b>2025년 11월 21일 토요일 19:00 (7일차)</b></summary>
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
