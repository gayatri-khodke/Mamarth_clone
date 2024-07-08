const questionsArray = [
    {
        que: 'What is the Coupon Code for OMG Sale?',
        ans: "The coupon code for the sale is 'OMG'. The offer is not applicable on kits and Diapers and can't be clubbed with other coupon and offer."
    },
    {
        que: 'How Can I Track My Order?',
        ans: 'Order updates will be sent to you on regular basis through SMS & Email. You can also track your order here - https://mamaearth.in/order-track, post order dispatch.'
    },
    {
        que: 'Is there any Upper Order Limit?',
        ans: 'Yes, Offer Valid only once per user with max order limit of Rs 2000 ( for COD) and Rs 5000 ( for Prepaid).'
    },
    {
        que: 'Can i avail the cashback?',
        ans: 'No, cashback can’t be availed with the offer'
    },
    {
        que: 'What are the Shipping & COD charges?',
        ans: 'There is no Shipping & COD charges on an order value greater than Rs. 399. We provide an extra 5% off on all Prepaid Offers. There is no shipping charge on Goodness Insider Members.'
    },
    {
        que: 'Can I use existing wallet balance to place an order?',
        ans: 'Mama Cashback (Wallet balance) cannot be clubbed with OMG offer.'
    }
];

const faqWrapper = document.querySelector('.faq-wraper');

function displayQuestions() {
    questionsArray.forEach(e => {
        const quediv = document.createElement('div');
        quediv.classList.add('que-div');

        quediv.innerHTML = `
            <div class="que">
                <h4>${e.que}</h4>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <p class="ans">${e.ans}</p>
        `;
        faqWrapper.appendChild(quediv);
    });
}

displayQuestions();

faqWrapper.addEventListener('click', toggleAnswer);

function toggleAnswer(event) {
    const target = event.target;
    if (target.classList.contains('fa-angle-down')) {
        const queDiv = target.closest('.que-div');
        const ansdiv = queDiv.querySelector('.ans');
        if (ansdiv) {
            ansdiv.classList.toggle('anstoggle');
        }
        const que = queDiv.querySelector('h4');
        if (que) {
            que.style.color = que.style.color === 'rgb(130, 195, 65)' ? 'rgb(114, 114, 114)' : 'rgb(130, 195, 65)';
        }
    }
}
