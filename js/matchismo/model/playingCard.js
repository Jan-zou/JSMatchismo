(function(card){
    'use strict';

    function PlayingCard(){
        this.superClass = card.Card;
        this.superClass.call(this);
        this.constructor = PlayingCard;
    }

    PlayingCard.prototype = Object.create(card.Card.prototype);

    function exports(){
        return PlayingCard();
    }

    exports.PlayingCard = PlayingCard;

    window.playingCard = exports;

})(window.card);
