import React from "react";
import "../Password/style.css";

function GeneratePassword(){
    var password = document.getElementById('password')
        function genPassword(){
            var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%ˆ&*()ABCDEFGHIJKLMNOPQRSTUVXWYZ'
            var passwordLength = 12
            var password = ''
            for(var i = 0; i <= passwordLength; i++){
                var randomNumber = Math.floor(Math.random() * chars.length)
                password += chars.substring(randomNumber, randomNumber + 1)
            }
            document.getElementById('password').value = password
        }

        function copyPassword(){
            var copyText = document.getElementById('password')
            copyText.select()
            copyText.setSelectionRange(0, 999)
            document.execCommand('copy')
        }
        console.log(password);
    return(
        <div className="box">
            <h2>Random Password Generator</h2>
            <input type="text" placeholder="Create password" id="password" readOnly />
            <table>
                <th><div id="button" className="btn1" onClick={genPassword}>Generate</div></th>
                <th id="button" className="btn2" onClick={copyPassword} ><a>Copy</a></th>
            </table>
        </div>
    );
}
export default GeneratePassword;