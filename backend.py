from flask import Flask, jsonify

app = Flask(__name__)


phones = [
    {
        'id': 1,
        'vendor': u'Samsung',
        'model': u'Galaxy 10',
        'price': 45000
    },
    {
        'id': 2,
        'title': u'Xiaomi',
        'model': u'Redmi',
        'price': 10000
    },
    {
        'id': 3,
        'vendor': u'Apple',
        'model': u'Iphone 11',
        'price': 70000
    }
]


@app.route('/main', methods=['GET'])
def index():
    return jsonify(phones)


if __name__ == '__main__':
    app.run()
