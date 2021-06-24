const joi =require('@hapi/joi');
const schema ={

student: joi.object({
name:joi.string().max(100).required(),
regid:joi.number().integer().max(100).message('Not possible student').required(),
sec:joi.string().max(100).required()

})

}

module.exports =schema;