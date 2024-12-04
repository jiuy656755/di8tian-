*/

var body = $response.body;

// 替换 "free":\w+
body = body.replace(/"free":\w+/g, '"free":true');

// 替换 "isSchoolAgeMember":\w+
body = body.replace(/"isSchoolAgeMember":\w+/g, '"isSchoolAgeMember":true');

// 替换 "isNormalMember":\w+
body = body.replace(/"isNormalMember":\w+/g, '"isNormalMember":true');

// 替换 "baseMemberAvailable":\w+
body = body.replace(/"baseMemberAvailable":\w+/g, '"baseMemberAvailable":false');

// 替换 "expiresAt": "\d{4}年\d{1,2}月\d{1,2}日"
body = body.replace(/"expiresAt": "\d{4}年\d{1,2}月\d{1,2}日"/g, '"expiresAt": "2099年9月9日"');

// 替换 "selectedKid" : {
body = body.replace(/"selectedKid" : {/g, '"selectedKid" : { "schoolAgeMember" : { "expiresAt" : "2099年9月9日", "__typename" : "Member" },');

$done({ body });
