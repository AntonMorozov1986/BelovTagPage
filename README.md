05_BelovTagPage

Ожидаемый ответ на GET запрос списка тегов:
json:
[
    {"tagId": 1, "title": "tagTitle1", "groupId": "1"},
    {"tagId": 2, "title": "tagTitle1", "groupId": "1"},
    ...
    {"tagId": N, "title": "tagTitleN", "groupId": "1"}
]

POST запрос списка статей с требуемыми тегами:
json:
[
    {"tagId": 1},
    {"tagId": 2},
    ...
    {"tagId": N}
]

Ожидаемый ответ на POST запрсо списка статей:

[
    {"ssmId": 1, title: "ssmTitle1"},
    {"ssmId": 2, title: "ssmTitle2"},
    ...
    {"ssmId": N, title: "ssmTitleN"}
]


