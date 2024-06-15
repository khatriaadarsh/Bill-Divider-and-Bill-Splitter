const billAmountInput = document.querySelector('#bill-amount');
const customTipInput = document.querySelector('.custom-input')
const numberOfPeopleInput = document.querySelector('.number-of-people');
const generateBillBtn = document.querySelector('.generate-bill-btn');
const eachPersonBillOutput = document.querySelector('.each-person-bill span');
const tipAmountOutput = document.querySelector('.tip-amount span');
const totalBillOutput = document.querySelector('.total span');
const tipsContainer = document.querySelector('.tip-container');
let resetBtn = document.querySelector('.reset-btn');
let tipPercentage;

generateBillBtn.addEventListener('click' ,()=>{
      const billAmount = parseInt(billAmountInput.value);
      const numberOfPeople = parseInt(numberOfPeopleInput.value);

      const tipAmount = billAmount * (tipPercentage / 100);
      const totalBill = billAmount + tipAmount;
      const eachPersonBill = totalBill / numberOfPeople;

      tipAmountOutput.innerHTML = `Rs:${tipAmount}`;
      totalBillOutput.innerHTML = `Rs:${totalBill}`;
      eachPersonBillOutput.innerText = `Rs:${eachPersonBill}`;

      resetBtn.disabled = false;      
})
tipsContainer.addEventListener('click', (e)=>{
    if(e.target !== tipsContainer){
        [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'));
        e.target.classList.add('selected')
        tipPercentage = parseInt(e.target.innerText);
        customTipInput.value = '';
    }
})

customTipInput.addEventListener(('input') , () =>{
        tipPercentage = parseInt(customTipInput.value);  
        [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'));
})

resetBtn.addEventListener(('click') , () => {
    tipPercentage = undefined;
    billAmountInput.value = '';
    customTipInput.value = '';
    numberOfPeopleInput = '';
    [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'));
    tipAmountOutput.innerHTML = '';
    totalBillOutput.innerHTML = '';
    eachPersonBillOutput.innerText = '';
    resetBtn.disabled = true;
})
