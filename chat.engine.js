/**
 * Engine chatbot
 */

const superscript = require('superscript').default

function EngineBot(){
    this.bot = null
}

EngineBot.prototype.init = function (options) {
    return new Promise( (resolve, reject) => {
        superscript.setup(options, (err, botinstance ) => {
            if (err) {
                reject(err)
            } else {
                console.info('EngineBot is started.')
                this.bot = botinstance
                resolve()
            }
        })
    } )
}

EngineBot.prototype.reply = function (userId, message) {
    return new Promise(( resolve, reject ) => {
        if (this.bot){
            console.log( 'userId: ', userId, ', message: ', message )
            this.bot.reply( userId, message, (err, result) => {
                if (err) return reject(err)
                resolve(result)
            })
        } else{
            reject( 'Not init. ')
        }
    })
}

EngineBot.prototype.directReply = function( userId, topicId, topicQuestionId) {
  return new Promise((resolve, reject)=>{
    if( this.bot ) {
      console.log('userId: ', userId, ' topicId: ', topicId, ' topicQuestionId: ', topicQuestionId)
      this.bot.directReply( userId, topicId, topicQuestionId, (err, result) =>{
        if( err ) return reject(err)
        resolve(result)
      })
    } else{
      reject( 'Not init.')
    }
  })
}

exports = module.exports = new EngineBot()