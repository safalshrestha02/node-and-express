const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "text", "a.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "text", "a.txt"), data);

    await fsPromises.writeFile(
      path.join(__dirname, "text", "promise.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "text", "promise.txt"),
      "\n nigato"
    );
    await fsPromises.rename(
      path.join(__dirname, "text", "promise.txt"),
      path.join(__dirname, "text", "promiseRename.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "text", "promiseRename.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(path.join(__dirname, "text", "a.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "text", "b.txt"),
//   "nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log(" write Completed");

//     fs.appendFile(path.join(__dirname, "text", "b.txt"), "\t\t niceee niggaaa", (err) => {
//       if (err) throw err;
//       console.log(" append Completed");

//       fs.rename(path.join(__dirname, "text", "b.txt"), path.join(__dirname, "text", "d.txt"), (err) => {
//         if (err) throw err;
//         console.log(" rename Completed");

//       })

//     })
// })
//ex
//exit on uncaught errors

process.on("uncaughtException", (err) => {
  console.error(`there was an error: ${err}`);
  process.exit(1);
});
