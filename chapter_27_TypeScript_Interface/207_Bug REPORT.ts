interface BugReport {
    id: number;
    title: string;
    severity: string;
    priority: string;
    stepsToReproduce: string[];
}

const bugReport1: BugReport = {
    id: 101,
    title: "Login Button not working",
    severity: "High",
    priority: "P1",
    stepsToReproduce: ["step1", "step2", "step3"]
}

const bugReport2: BugReport = {
    id: 202,
    title: "Add to Cart not working",
    severity: "High",
    priority: "P2",
    stepsToReproduce: ["step1", "step2", "step3"]
}

const bugReport3: BugReport = {
    id: 303,
    title: "Forgot Password link is not navigating to enter a new password",
    severity: "Low",
    priority: "P3",
    stepsToReproduce: ["step1", "step2", "step3"]
}
