extends Sprite

var speed = 10

func _process(delta):
	if Input.is_action_pressed("ui_up"):
		position += Vector2.UP.rotated(rotation) * speed
	if Input.is_action_pressed("ui_down"):
		position += Vector2.UP.rotated(rotation) * speed * -1
	if Input.is_action_pressed("ui_right"):
		position += Vector2.RIGHT.rotated(rotation) * speed
	if Input.is_action_pressed("ui_left"):
		position += Vector2.RIGHT.rotated(rotation) * speed * -1
