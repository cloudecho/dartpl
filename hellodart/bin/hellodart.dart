// import 'package:hellodart/hellodart.dart' as hellodart;

// ch0101
// void main(List<String> arguments) {
//   print('Hello world: ${hellodart.calculate()}!');
// }

// ch0102-1
void main1() {
  var x = 3; // 1
  var (y, z) = (4, 5); // 2
  print('x = $x, y = $y, z = $z'); // 3 Output: x = 3, y = 4, z = 5
  print('x + y + z = ${x + y + z}'); // 4 Output: x + y + z = 12
}

// ch0102-2
void main2() {
  int x;
  x = 3;
  var y = 4, z = 5;
  print('x = $x, y = $y, z = $z');
  print('x + y + z = ${x + y + z}');
}

// ch0102-3
void main3() {
  var x = 3;
  x = 30;
  print('x = $x'); // Output: x = 30
}

// ch0102-4
void main4() {
  var name = 'Dart';
  print('Hello, $name!'); // Output: Hello, Dart!
}

// ch0102-5
void main5() {
  late String action = 'go camping';
  var isReady = true; // it may take some time to prepare
  if (isReady) {
    print("Let's $action!"); // Output: Let's go camping!
  }
}

// ch0102-6
void main6() {
  int x;
  // print('x = $x');

  // Error: Non-nullable variable 'x' must be assigned before it can be used.
  // print('x = $x');
  //             ^
}

// ch0102-7
void main7() {
  int? x;
  print('x = $x'); // Output: x = null
}

// ch0102-8
void main8() {
  int? x;
  var y = x ?? 10; // 1
  var z = y ?? 20; // 1a
  print('y = $y, z = $z'); // Output: y = 10, z = 10

  int? y2;
  y ??= 100; // 2
  y2 ??= 100; // 2a
  print('y = $y, y2 = $y2'); // Output: y = 10, y2 = 100

  var a = y!; // 3
  print('a = $a'); // Output: a = 10

  var b = x!; // 3a
  print('b = $b');
  // Unhandled exception:
  // Null check operator used on a null value
}

// ch0102-9
void main9() {
  var abc = 'ABCD';
  String? def;

  var first = abc?[0]; // 1
  var second = def?[0]; // 1a
  print('first = $first, second = $second'); // Output: first = A, second = null

  var len1 = abc?.length; // 2
  var len2 = def?.length; // 2a
  print('len1 = $len1, len2 = $len2'); // Output: len1 = 4, len2 = null

  var len3 = def?.length ?? 0; // 3
  print('len3 = $len3'); // Output: len3 = 0
}

// ch0102-a
void main() {
  var arr = [1, 2, 3];
  var arr2 = [...arr, 4, 5]; // 1
  print('arr2 = $arr2'); // Output: arr2 = [1, 2, 3, 4, 5]

  var arr3 = [...?arr, 6, 7]; // 2
  print('arr3 = $arr3'); // Output: arr3 = [1, 2, 3, 6, 7]

  List<int>? arr4;
  var arr5 = [...?arr4, 8, 9]; // 2a
  print('arr5 = $arr5'); // Output: arr5 = [8, 9]
}
