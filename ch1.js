const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 150;

var bank_balance = 302.13;

function printAmount(amt) {
    console.log( "$" + amt.toFixed( 2 ) );
}

function calculateFinalPurchaseAmount(amt) {
    // calculate the new amount with the tax
    amt = amt + (amt * TAX_RATE);

    // return the new amount
    return amt;
}

function purchasePhone() {
	// purchase phones and accessories until out of money
	// TODO
}