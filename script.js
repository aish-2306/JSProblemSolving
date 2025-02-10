function atmWithdrawal() {
    let balance = parseFloat(document.getElementById('atm-balance').value);
    let amount = parseFloat(document.getElementById('atm-amount').value);
    let pin = document.getElementById('atm-pin').value;
    let enteredPin = document.getElementById('atm-entered-pin').value;
    let result = document.getElementById('atm-result');
    
    if (pin !== enteredPin) {
        result.textContent = "Incorrect PIN";
        return;
    }
    if (amount > balance) {
        result.textContent = "Insufficient Funds";
        return;
    }
    if (amount % 100 !== 0) {
        result.textContent = "Enter amount in multiples of 100";
        return;
    }
    
    result.textContent = `Withdrawal Successful. Remaining Balance: ${balance - amount}`;
}

function calculateFinalAmount() {
    let orderAmount = parseFloat(document.getElementById('order-amount').value);
    let discount = 0;
    let shipping = 0;
    
    if (orderAmount > 1000) {
        discount = 0.20;
    } else if (orderAmount >= 500) {
        discount = 0.10;
    }
    
    if (orderAmount < 50) {
        shipping = 10;
    }
    
    let finalAmount = orderAmount - (orderAmount * discount) + shipping;
    document.getElementById('shopping-result').textContent = `Final Amount: $${finalAmount.toFixed(2)}`;
}

function calculateGrade() {
    let marks = parseInt(document.getElementById('student-marks').value);
    let attendance = parseFloat(document.getElementById('student-attendance').value);
    
    if (attendance > 90) {
        marks += 5;
    }
    
    let grade = marks >= 90 ? 'A' :
                marks >= 80 ? 'B' :
                marks >= 70 ? 'C' :
                marks >= 60 ? 'D' : 'F';
    
    document.getElementById('grading-result').textContent = `Grade: ${grade}`;
}

function trafficLightControl() {
    let density = document.getElementById('traffic-density').value;
    let time = density === "Heavy Traffic" ? 60 :
               density === "Moderate Traffic" ? 40 : 20;
    
    document.getElementById('traffic-result').textContent = `Green Light Time: ${time} seconds`;
}

function calculateTicketPrice() {
    let age = parseInt(document.getElementById('ticket-age').value);
    let showTime = document.getElementById('ticket-time').value;
    let price = 12;
    
    if (parseInt(showTime.split(':')[0]) < 17) {
        price *= 0.8;
    }
    if (age > 60) {
        price *= 0.7;
    } else if (age < 12) {
        price *= 0.6;
    }
    
    document.getElementById('ticket-result').textContent = `Final Ticket Price: $${price.toFixed(2)}`;
}

function isEligibleForJob() {
    let age = parseInt(document.getElementById('job-age').value);
    let experience = parseInt(document.getElementById('job-experience').value);
    let qualification = document.getElementById('job-qualification').value;
    
    let eligible = age >= 21 && age <= 55 && experience >= 2 && qualification.toLowerCase() === "bachelor's degree";
    
    document.getElementById('job-result').textContent = eligible ? "Eligible for Job" : "Not Eligible";
}

function applyCoupon() {
    let orderAmount = parseFloat(document.getElementById('coupon-amount').value);
    let couponCode = document.getElementById('coupon-code').value;
    let discount = 0;
    
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = 0.10;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        discount = 0;
    }
    
    let finalPrice = orderAmount - (orderAmount * discount);
    document.getElementById('coupon-result').textContent = `Final Price: $${finalPrice.toFixed(2)}`;
}

function choosePlan() {
    let plan = document.getElementById('plan-type').value;
    document.getElementById('plan-result').textContent = `You have chosen the ${plan} plan.`;
}

function calculateElectricityBill() {
    let units = parseFloat(document.getElementById('electricity-units').value);
    let time = document.getElementById('electricity-time').value;
    let hour = parseInt(time.split(':')[0]);
    let rate = units <= 100 ? 5 : units <= 300 ? 4 : 3;
    
    if (hour >= 20 || hour < 8) {
        rate *= 1.1;
    }
    
    document.getElementById('electricity-result').textContent = `Total Bill: $${(units * rate).toFixed(2)}`;
}

function calculateFlightFare() {
    let classType = document.getElementById('flight-class').value;
    let luggage = parseFloat(document.getElementById('flight-luggage').value);
    let isStudent = document.getElementById('flight-student').checked;
    let isSenior = document.getElementById('flight-senior').checked;
    let baseFare = 300;
    
    if (classType === "Business") baseFare += 200;
    if (classType === "First") baseFare += 500;
    
    baseFare += Math.max(0, (luggage - 20) / 10) * 50;
    
    if (isStudent) baseFare *= 0.85;
    if (isSenior) baseFare *= 0.90;
    
    document.getElementById('flight-result').textContent = `Total Fare: $${baseFare.toFixed(2)}`;
}

