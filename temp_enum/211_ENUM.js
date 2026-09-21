"use strict";
var TestStatus;
(function (TestStatus) {
    TestStatus["pass"] = "PASS";
    TestStatus["fail"] = "FAIL";
    TestStatus["skip"] = "SKIP";
    TestStatus["pending"] = "PENDING";
    TestStatus["blocked"] = "BLOCKED";
})(TestStatus || (TestStatus = {}));
console.log(TestStatus.pass);
