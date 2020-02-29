const Converter = require("api-spec-converter");
const fs = require("fs");

const fileSourcePath = "./swagger20example.yaml";

// template: openApi3 to swagger
const convertFromOpenApi = "openapi_3";
const convertedToSwagger = "swagger_2";
const options1 = { syntax: "openapi", order: "yaml" };

// template: swagger to openApi3
const convertFromSwagger = "swagger_2";
const convertedToOpenaApi = "openapi_3";
const options2 = { syntax: "json", order: "openapi" };

const convertFunc = (nameOfFile, textSource) => {
  fs.writeFile(nameOfFile + ".json", textSource, function(err) {
    if (err) throw err;
    console.log(`The OAS file has been saved as ${nameOfFile}.json`);
  });
};

Converter.convert(
  {
    from: convertFromSwagger,
    to: convertedToOpenaApi,
    source: fileSourcePath
  },
  function(err, converted) {
    if (err) throw err;
    console.log(converted.stringify(options2));

    convertFunc(
      "./converted-files/swagger20exampleOAS3.json",
      converted.stringify(options2)
    );
  }
);
