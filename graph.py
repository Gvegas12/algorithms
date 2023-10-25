from collections import deque

graph = {}
graph["you"] = ["claire", "thom"]
graph["thom"] = ["claire"]
graph["claire"] = ["jhon"]
graph["alisa"] = ["peggy"]
graph["peggy"] = ["bob"]
graph["bob"] = ["anudje"]


def person_is_seller(name):
    return name == "anudje"


def search(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    while search_queue:
        print(search_queue)
        # Вытаскиваем из очереди
        person = search_queue.popleft()

        # Если нет такого персонажа в проверенных
        if not person in searched:
            # Если нашелся
            if person_is_seller(person):
                print(person, "is a mango seller!")
                return True
            else:
                # если персонаж есть в графе и персонажа есть друзья
                if person in graph:
                    if graph[person]:
                        search_queue += graph[person]
                    searched.append(person)
    return False


print(search("you"))
