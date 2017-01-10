// @flow
import React, { Component } from 'react';

export default class ChatMessage extends Component {
  constructor() {
    super();
    this.formatEmotes = this.formatEmotes.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }
  htmlEntities(html) {
    function it() {
      return html.map(function(n, i, arr) {
        if(n.length == 1) {
          return n.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
            return '&#'+i.charCodeAt(0)+';';
          });
        }
        return n;
      });
    }
    var isArray = Array.isArray(html);
    if(!isArray) {
      html = html.split('');
    }
    html = it(html);
    if(!isArray) html = html.join('');
    return html;
  }
  formatEmotes(text, emotes) {
    var splitText = text.split('');
      for(var i in emotes) {
        var e = emotes[i];
        for(var j in e) {
          var mote = e[j];
          if(typeof mote == 'string') {
            mote = mote.split('-');
            mote = [parseInt(mote[0]), parseInt(mote[1])];
            var length =  mote[1] - mote[0],
              empty = Array.apply(null, new Array(length + 1)).map(function() { return '' });
            splitText = splitText.slice(0, mote[0]).concat(empty).concat(splitText.slice(mote[1] + 1, splitText.length));
            splitText.splice(mote[0], 1, '<img class="emoticon" src="http://static-cdn.jtvnw.net/emoticons/v1/' + i + '/3.0">');
          }
        }
      }
    return this.htmlEntities(splitText).join('');
  }
  createMarkup() {
    const markup = this.formatEmotes(this.props.message.message, this.props.message.userstate.emotes);
    return {__html: markup};
  }
  render() {
    return (
      <div className="md-cell md-cell--12 md-body-1" style={{wordWrap: 'break-word'}}>
        <span className="md-font-bold" style={{color: this.props.message.userstate.color}}>{this.props.message.userstate['display-name']}</span>: <span dangerouslySetInnerHTML={this.createMarkup()}></span>
      </div>
    );
  }
}
