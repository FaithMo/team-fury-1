var data = {
    fullname: "Faith Mofokeng",
    hng_id: "HNG-03500",
    language: "javascript",
    email: "faithmofokeng5@gmail.com"
}

const say = () => {
    var output = `Hello world, this is ${data.fullname} with ${data.hng_id} and I'm using ${data.language} for stage 2 task`;
    return console.log(output);
}

say();

