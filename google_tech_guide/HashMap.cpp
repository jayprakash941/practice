// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;

class Bucket
{
public:
    virtual int get(int key) = 0;
    virtual void upsert(int key, int value) = 0;
    virtual void del(int key) = 0;
};

class Node
{
public:
    int key;
    int value;
    Node *next;
};

class LinkedList : public Bucket
{
private:
    Node *head;

public:
    void upsert(int key, int val)
    {
        if (this->head == NULL)
        {
            Node *node = new Node();
            node->key = key;
            node->value = val;
            this->head = node;
            return;
        }
        Node *temp = this->head;
        while (temp->next != NULL && temp->key != key) {
            temp = temp->next;
        }
        temp->value = val;
    }

    int get(int key)
    {
        Node *temp = this->head;
        while (temp != NULL)
        {
            if (temp->key == key)
            {
                return temp->value;
            }
            temp = temp->next;
        }
        return -1;
    }

    void del(int key)
    {
        Node *temp = this->head;
        if (temp->key == key)
        {
            this->head = temp->next;
            return;
        }
        Node *prev = NULL;
        while (temp != NULL && temp->key != key)
        {
            prev = temp;
            temp = temp->next;
        }
        if (temp == NULL)
        {
            return;
        }
        prev->next = temp->next;
    }
};

class MyHashMap
{
private:
    static const int SIZE = 1;
    Bucket *keyStore[SIZE];

public:
    MyHashMap()
    {
        for (int i = 0; i < SIZE; i++)
        {
            keyStore[i] = new LinkedList();
        }
    }

    Bucket* getBucket(int key)
    {
        return keyStore[key % SIZE];
    }

    void put(int key, int value)
    {
        Bucket* bucket = this->getBucket(key);
        bucket->upsert(key, value);
    }

    void remove(int key)
    {
        Bucket* bucket = this->getBucket(key);
        bucket->del(key);
    }

    int get(int key)
    {
        Bucket* bucket = this->getBucket(key);
        return bucket->get(key);
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */

int main()
{
    // Write C++ code here
    MyHashMap *hashMap = new MyHashMap();
    hashMap->put(1, 2);
    hashMap->put(2, 2);
    hashMap->put(3, 2);
    hashMap->put(4, 2);
    hashMap->put(1, 3);
    cout << hashMap->get(1) << "\n";
    hashMap->remove(1);
    cout << hashMap->get(1) << "\n";
    return 0;
}