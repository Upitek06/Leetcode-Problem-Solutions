class Solution {
  List<String> fizzBuzz(int n) {
    var res = <String>[];
    for (int i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        res.add("FizzBuzz");
      } else if (i % 3 == 0) {
        res.add("Fizz");
      } else if (i % 5 == 0) {
        res.add("Buzz");
      } else {
        res.add(i.toString());
      }
    }
    return res;
  }
}
