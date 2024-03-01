/*
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});      //toBe 
*/

const fetchPromise = require("./sum");

//const fetchData = require("./sum");

/*
test("object assigned", () => {
  const data = { one: 1 };
  data["two"] = 2;    //toEqual
  expect(data).toEqual({ one: 1, two: 2 });
}); 
*/

/*
test("zero is falsy", () => {
  const n = zero;
  expect(n).toBeFalsy; //toBeFalsy
});
*/

/*
test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy;  //toBeTruthy
});
*/

/*
const myFunction = require("./sum");

test("throws on invalid input", () => {
  expect(() => {
    myFunction(3);
  }).toThrow(); //toThrow throws an error when run
});
*/

/*
Testing Asynchronous code

test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }                              //testing callbacks
  }
  fetchData(callback);
});
*/
/* 
const fetchPromise = require("./sum");
                                  //testing promises
test("the data is peanut butter", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  return expect(fetchPromise()).rejects.toThrow("error");
});
*/

/*
test("the data is peanut butter", async () => {
  const data = await fetchPromise(); //testing async await
  expect(data).toBe("peanut butter");
});
*/

/*
test("mock implementation of a basic function", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(1).toBe(43));
  expect(mock).toHaveBeenCalledWith(1);
});
*/

test("slying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
