#include<iostream>
#include<string>
using namespace std;
class Person {
  public:
    Person(string name, int age) {
      personName = name;
      personAge = age;
      cout << personName << endl;
    }
    string getName() {
      return personName;
    }
    int getAge() {
      string name = this->getName();

      return personAge;
    }
  private:
    string personName;
    int personAge;
};

int main () {
  Person person("张三", 18);
  Person* pointer = &person;
  Person* pointer_one = new Person("李四", 22);
  cout << pointer->getAge() << endl;
  cout << pointer_one->getName() << endl;
  return 0;
}