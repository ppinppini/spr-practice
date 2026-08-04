# spr-practice

Stacked Pull Requests(spr) 연습용 TODO 앱.

## 스택 구성

| 순서 | 커밋 | 내용 |
| ---- | ---- | ---- |
| 1 | `feat: TODO 목록 UI 구현` | App.jsx 한 파일에 전부 구현 |
| 2 | `refactor: TODO 컴포넌트 분리` | TodoInput / TodoList / TodoItem 추출 |
| 3 | `refactor: useTodos 커스텀 훅 분리` | 상태·핸들러를 훅으로 추출 |

각 커밋이 독립된 PR이 되고, 아래 PR이 위 PR의 base가 된다.

## 명령어

```bash
git spr update   # 스택 전체를 PR로 동기화
git spr status   # 현재 스택 상태 확인
git amend        # 스택 중간 커밋 수정
git spr merge    # 아래부터 순서대로 머지
```
