let player_color = "red";
let color_counter = 0;

let player_red = 0;
let player_yellow = 0;


function choose(row, col){

    let str_row = row.toString();
    let str_col = col.toString();
    let lower_row = row-1;
    let lower_row_str =  lower_row.toString();
    let id = str_row + "_"+ str_col;
    let lower_row_col = document.getElementById(lower_row_str + "_" + str_col);
    let row_col = document.getElementById(str_row + "_" + str_col);


    if(row > 0 && lower_row_col.style.backgroundColor !== "white"){
        document.getElementById(id).style.backgroundColor = player_color;
        color_counter++;
        if(color_counter % 2==0){
            player_color = "red";
        }else{
            player_color = "yellow";
        }
        document.getElementById(str_row + "_"+ str_col).value = true;
        Disable_Click(id);
    }
    
    if(row===0 && row_col.style.backgroundColor ==="white"){
        document.getElementById(str_row + "_"+ str_col).style.backgroundColor = player_color;
        color_counter++;
        if(color_counter % 2==0){
            player_color = "red";
        }else{
            player_color = "yellow";
        }
        document.getElementById(str_row + "_"+ str_col).value = true;
        Disable_Click(id);
    }
    check_all(row, col);
}

function Disable_Click(element) {
    document.getElementById(element).style.pointerEvents = 'none';
}

function make_white(){
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 7; j++){
            document.getElementById(i + "_" + j).style.backgroundColor = "white";
            document.getElementById(i + "_" + j).value = false;
            document.getElementById(i + "_" + j).style.pointerEvents = 'auto';
        }
    }
}

function start_game(){
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 7; j++){
            document.getElementById(i + "_" + j).style.backgroundColor = "white";
            document.getElementById(i + "_" + j).value = false;
            document.getElementById(i + "_" + j).style.pointerEvents = 'auto';
        }
    }
    document.getElementById("button_start").style.visibility = "hidden";
}

function check_all(row, col){
    check_horizontal_red(row);
    check_horizontal_yellow(row);
    check_vertikal_red(col);
    check_vertikal_yellow(col);
    //check_diagonal_rechts_oben_red(col, row)
    complete_check_red();
    complete_check_yellow();
    complete_check_diag_down_yellow();
    complete_check_diag_down_red();
}

function check_horizontal_red(row){
        let new_row = row.toString();
        for(let a = 0; a < 3; a++){
            let new_counter_red = 0;
            for(let b = 0; b <4; b++){
                let a_b = a+b;
                let new_a_b = a_b.toString()
                if(document.getElementById(new_row + "_" + new_a_b).style.backgroundColor === "red"){
                    new_counter_red++;
                }
                if(new_counter_red ===4){
                    console.log("RED is WINNER horizontal!!!!");
                    //alert("RED is the WINNER horizontal!!!");
                    alert("Player RED is the Winner.");
                    player_red++;
                    document.getElementById("player_red").innerHTML = "Player RED WINS: " + player_red.toString();
                }
            }
        }
}

function check_horizontal_yellow(row){
    let new_row = row.toString();
    for(let a = 0; a < 3; a++){
        let new_counter_yellow = 0;
        for(let b = 0; b <4; b++){
            let a_b = a+b;
            let new_a_b = a_b.toString()
            if(document.getElementById(new_row + "_" + new_a_b).style.backgroundColor === "yellow"){
                new_counter_yellow++;
            }
            if(new_counter_yellow ===4){
                alert("Player YELLOW is the Winner.");
                player_yellow++;
                document.getElementById("player_yellow").innerHTML = "Player YELLOW WINS: " + player_yellow.toString();
            }
        }
    }
}

function check_vertikal_yellow(col){
    let new_col = col.toString();
    for(let a = 0; a < 3; a++){
        let new_counter_yellow = 0;
        for(let b = 0; b <4; b++){
            let a_b = a+b;
            let new_a_b = a_b.toString()
            if(document.getElementById(new_a_b + "_" + new_col).style.backgroundColor === "yellow"){
                new_counter_yellow++;
            }
            if(new_counter_yellow ===4){
                alert("Player YELLOW is the Winner.");
                player_yellow++;
                document.getElementById("player_yellow").innerHTML = "Player YELLOW WINS: " + player_yellow.toString();
            }
        }
    }
}

function check_vertikal_red(col){
    let new_col = col.toString();
    for(let a = 0; a < 3; a++){
        let new_counter_red = 0;
        for(let b = 0; b <4; b++){
            let a_b = a+b;
            let new_a_b = a_b.toString()
            if(document.getElementById(new_a_b + "_" + new_col).style.backgroundColor === "red"){
                new_counter_red++;
            }
            if(new_counter_red ===4){
                console.log("RED is WINNER vertikal!!!!");
                alert("Player RED is the Winner.");
                player_red++;
                document.getElementById("player_red").innerHTML = "Player RED WINS: " + player_red.toString();            }
        }
    }
}

function complete_check_red(){
    //y = row
    for(let y = 0; y < 3; y++){
        //x für col
        for(let x = 0; x < 4; x++){
            
            // y = 0 => 00, 11, 22, 33 
            // y = 1 => 10, 21, 32, 43
            let val_x = x;
            let val_y = y;
            if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "red"){
                val_x += 1;
                val_y += 1;
                if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "red"){
                    val_x += 1;
                    val_y += 1;
                    if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "red"){
                        val_x += 1;
                        val_y += 1;
                        if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "red"){
                            alert("Player RED is the Winner.");
                            player_red++;
                            document.getElementById("player_red").innerHTML = "Player RED WINS: " + player_red.toString();
                        }
                    }
                }
            }
        }       
    }
}

function complete_check_yellow(){
    //y = row
    for(let y = 0; y < 3; y++){
        //x für col
        for(let x = 0; x < 4; x++){
            
            // y = 0 => 00, 11, 22, 33 
            // y = 1 => 10, 21, 32, 43
            let val_x = x;
            let val_y = y;
            if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "yellow"){
                val_x += 1;
                val_y += 1;
                if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "yellow"){
                    val_x += 1;
                    val_y += 1;
                    if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "yellow"){
                        val_x += 1;
                        val_y += 1;
                        if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "yellow"){
                            alert("Player YELLOW is the Winner.");
                            player_yellow++;
                            document.getElementById("player_yellow").innerHTML = "Player YELLOW WINS: " + player_yellow.toString();
                        }
                    }
                }
            }
        }       
    }
}





function complete_check_diag_down_yellow(){
    //y = row
    for(let y = 0; y < 3; y++){
        //x für col
        for(let x = 6; x > 3; x--){
            
            // y = 0 => 00, 11, 22, 33 
            // y = 1 => 10, 21, 32, 43
            let val_x = x;
            let val_y = y;
            if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "yellow"){
                val_x -= 1;
                val_y += 1;
                if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "yellow"){
                    val_x -= 1;
                    val_y += 1;
                    if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "yellow"){
                        val_x -= 1;
                        val_y += 1;
                        if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "yellow"){
                            alert("Player YELLOW is the Winner.");
                            player_yellow++;
                            document.getElementById("player_yellow").innerHTML = "Player YELLOW WINS: " + player_yellow.toString();
                        }
                    }
                }
            }
        }       
    }
}



function complete_check_diag_down_red(){
    //y = row
    for(let y = 0; y < 3; y++){
        //x für col
        for(let x = 6; x > 3; x--){
            
            // y = 0 => 00, 11, 22, 33 
            // y = 1 => 10, 21, 32, 43
            let val_x = x;
            let val_y = y;
            if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "red"){
                val_x -= 1;
                val_y += 1;
                if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "red"){
                    val_x -= 1;
                    val_y += 1;
                    if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "red"){
                        val_x -= 1;
                        val_y += 1;
                        if(document.getElementById(val_y.toString() + "_" + val_x.toString()).style.backgroundColor === "red"){
                            alert("Player RED is the Winner.");
                            player_red++;
                            document.getElementById("player_red").innerHTML = "Player RED WINS: " + player_red.toString();

                        }
                    }
                }
            }
        }       
    }
}
