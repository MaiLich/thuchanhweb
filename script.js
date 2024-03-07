document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var team = document.getElementById("team").value;
    
    document.getElementById("infoForm").style.display = "none";
    document.getElementById("survey").style.display = "block";
    
    if( team == 1){
        for (var i = 1; i <= 10; i++) {
            var div = document.createElement('div');
            div.innerHTML = `
                <div><h1 style="font-size:16px">Câu hỏi: Ý thức có trước, vật chất có sau, ý thức quyết định vật chất, đây là quan điểm nào?</h1></div>
                <div>
                    <label>Đáp án:</label><br>
                    <input type="radio" id="dapAnA" name="dapAn" value="A" /> Đúng<br>
                    <input type="radio" id="dapAnB" name="dapAn" value="B" /> Sai<br>
                </div>
            `;
            document.getElementById("survey").appendChild(div);
        }
        document.getElementById("save").style.display = "block";
    }
    if( team == 2){
        for (var i = 1; i <= 10; i++) {
            var div = document.createElement('div');
            div.innerHTML = `
                <div><h1 style="font-size:16px">Câu hỏi: Ý thức có trước, vật chất có sau, ý thức quyết định vật chất, đây là quan điểm nào?</h1></div>
                <div>
                    <label>Đáp án:</label><br>
                    <input type="radio" id="dapAnA" name="dapAn" value="A" /> Duy vật<br>
                    <input type="radio" id="dapAnB" name="dapAn" value="B" /> Duy tâm chủ quan<br>
                    <input type="radio" id="dapAnC" name="dapAn" value="C" /> Duy tâm<br>
                    <input type="radio" id="dapAnD" name="dapAn" value="D" /> Nhị nguyên<br>
                </div>
            `;
            document.getElementById("survey").appendChild(div);
        }
        document.getElementById("save").style.display = "block";
    }
    if( team == 3){
        for (var i = 1; i <= 10; i++) {
            var div = document.createElement('div');
            div.innerHTML = `
                <div><h1 style="font-size:16px">Câu hỏi: Ý thức có trước, vật chất có sau, ý thức quyết định vật chất, đây là quan điểm nào?</h1></div>
                <div>
                    <label>Đáp án:</label><br>
                    <input type="checkbox" id="dapAnA" name="dapAnA" value="A"> Duy vật <br>
                    <input type="checkbox" id="dapAnB" name="dapAnB" value="B"> Duy tâm chủ quan <br>
                    <input type="checkbox" id="dapAnC" name="dapAnC" value="C"> Duy tâm <br>
                    <input type="checkbox" id="dapAnD" name="dapAnD" value="D"> Nhị nguyên <br>
                </div>
            `;
            document.getElementById("survey").appendChild(div);
        }
        document.getElementById("save").style.display = "block";
    }
    if( team == 4){    
        for (var i = 1; i <= 10; i++) {
            var div = document.createElement('div');
            div.innerHTML = `
                <div><h1 style="font-size:16px">Câu hỏi: Ý thức có trước, vật chất có sau, ý thức quyết định vật chất, đây là quan điểm nào?</h1></div>
                <div>
                    <label for="dapAn">Đáp án:</label>
                    <input type="text" id="dapAn" name="dapAn" required><br><br>
                </div>
            `;
            document.getElementById("survey").appendChild(div);
        }
        document.getElementById("save").style.display = "block";
    }
    
});
