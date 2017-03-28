/**
 * test
 */

const test = require('ava')
const engineBot = require( './chat.engine')

var userId = '0001'

let config = {
    factSystem: {
      clean: true
    },
    importFile: './data.json'
  }

test.only('Test DirectReply', async function(t){
    await engineBot.init(config)
    let topic1 = {}
    let topic2 = {}

    console.log('*************************************************')
    topic1.Question1 = await engineBot.reply( userId, '@_t1_topic1_kickoff_@' )
    console.log('topic1.Question1: ', topic1.Question1.string)

    console.log('*************************************************')
    topic1.Question2 = await engineBot.reply( userId, 'topic1 answer1' )
    console.log('topic1.Question2: ', topic1.Question2.string)

    console.log('*************************************************')
    topic1.Question3 = await engineBot.reply( userId, 'topic1 answer2' )
    console.log('topic1.Question3: ', topic1.Question3.string)

    console.log('*************************************************')
    topic2.Question2 = await engineBot.directReply( userId, 't2', '__T2Q2_DIRECT' )
    console.log('Question to topic2/question2')
    console.log('topic2.Question2: ', topic2.Question2.string)

    console.log('*************************************************')
    topic2.Question3 = await engineBot.reply( userId, 'topic2 answer2' )
    console.log('topic2.Question3: ', topic2.Question3.string)
})

test.skip('Test DirectReply', async function(t){
    await engineBot.init(config)
    let topic1 = {}
    topic1.Question1 = await engineBot.reply( userId, '@_t1_topic1_kickoff_@' )
    topic1.Question2 = await engineBot.reply( userId, 'topic1 answer1' )
    topic1.Question3 = await engineBot.reply( userId, 'topic1 answer2' )
    topic1.Question4 = await engineBot.directReply( userId, 't1', '__T1Q4' )
    topic1.Question5 = await engineBot.reply( userId, 'topic1 answer4' )
    console.log('topic1.Question1: ', topic1.Question1.string)
    console.log('topic1.Question2: ', topic1.Question2.string)
    console.log('topic1.Question3: ', topic1.Question3.string)
    console.log('topic1.Question4: ', topic1.Question4.string)
    console.log('topic1.Question5: ', topic1.Question5.string)
})
