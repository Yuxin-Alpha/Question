#include<iostream>
#include<string>
using namespace std;
class Person {
  public:
    Person(string name) {
      personName = name;
      cout << personName << endl;
    }
    string getName() {
      return personName;
    }
    int getAge() {
      return personAge;
    }
  private:
    string personName;
    int personAge = 12;
};

int main () {
  Person person("张三");
  cout << person.getAge() << endl;
  return 0;
}