
var calculate_btn = document.querySelector("#calculate");

var initial_price = document.querySelector("#initial_price");
var quantity = document.querySelector("#quantity");
var current_price = document.querySelector("#current_price");

var output = document.querySelector(".output");


function calculate_profit_loss(init_price , stock_quan , curr_price){

    if( init_price > curr_price ){
        // loss logic
        var loss = (init_price - curr_price) * stock_quan;
		var lossPercentage = (loss / (init_price * stock_quan)) * 100;

        output.innerText = `whoops , The loss is Rs.${loss} and the percentage is ${lossPercentage.toFixed(2)}%`;
        

    } else if( curr_price > init_price ){
        // profit logic

        var profit = (curr_price - init_price) * stock_quan;
		var profitPercentage = (profit / (init_price * stock_quan)) * 100;

        output.innerText = `Hurray , The profit is Rs.${profit} and the percentage is ${profitPercentage.toFixed(2)}%`;
    }else{
        output.innerText = "No pain, no gain and no gain, no pain";
    }

}

function find_Profit_Loss(){

    var init_price = initial_price.value ;
    var stock_quan =  quantity.value ;
    var curr_price =  current_price.value;

    if(init_price === "" || stock_quan === "" || curr_price === ""){
        output.innerText =  "Please enter all fields.";
    }
    else{
        init_price = Number(init_price);
        stock_quan = Number(stock_quan);
        curr_price = Number(curr_price);

        if(init_price >= 1 && stock_quan >= 1 && curr_price >= 1){
            calculate_profit_loss(init_price , stock_quan , curr_price);
        }else{
            output.innerText = "Please enter valid input.";
        }

    }

}

calculate_btn.addEventListener("click" , find_Profit_Loss);