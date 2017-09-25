function Account(name, party) {
  this.inputName = name;
  this.inputParty = [];
}

Account.prototype.fullDetails = function() {
  return this.inputName + ": " + this.inputParty;
}

function withdrawl(account, pokemon) {
  for (var i = 0; i < account.inputParty.length; i++) {
    if (account.inputParty[i] === pokemon) {
      account.inputParty.splice(i,1);
      return;
    }
  }
}

$(document).ready(function(){
  var account = new Account();
  $("#account").submit(function(event){
    event.preventDefault();
    var userName = $("#userName").val();
    var initialPoke = $("#initialPoke").val();
    account.inputName = (userName);
    account.inputParty.push(initialPoke);
    $("#account").hide();
    $("#deposit").show();
    $("#withdrawl").show();
    $("#balance").text(account.fullDetails());
  });
  $("#deposit").submit(function(event){
    event.preventDefault();
    var depositPoke = $("#depositInput").val();
    account.inputParty.push(depositPoke);
    $("#balance").text("");
    $("#balance").append(account.inputName + ": " + account.inputParty);
    $("#depositInput").val("");
  });
  $("#withdrawl").submit(function(event){
    event.preventDefault();
    var withdrawlPoke = $("#withdrawInput").val();
    withdrawl(account, withdrawlPoke);
    $("#balance").text("");
    $("#balance").append(account.inputName + ": " + account.inputParty);
    $("#withdrawInput").val("");
  });
});
