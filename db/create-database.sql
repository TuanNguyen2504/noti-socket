-- Notification Table
CREATE SEQUENCE IF NOT EXISTS tbl_notification_id_seq;

CREATE TABLE IF NOT EXISTS sch_notification.tbl_notification
(
  id integer NOT NULL DEFAULT nextval('tbl_notification_id_seq'),
  sender TEXT NOT NULL,
  title TEXT NOT NULL,
	content TEXT,
	link TEXT,
	properties JSONB,
	priority SMALLINT DEFAULT 0,
	created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT tbl_notification_pkey PRIMARY KEY (id)
);

-- Receiver Table
CREATE SEQUENCE IF NOT EXISTS tbl_receiver_id_seq;

CREATE TABLE IF NOT EXISTS sch_notification.tbl_receiver
(
  id INTEGER NOT NULL DEFAULT nextval('tbl_receiver_id_seq'),
	email VARCHAR(255) NOT NULL,
	project_name VARCHAR(20) NOT NULL,
	created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT tbl_receiver_pkey PRIMARY KEY (id),
	CONSTRAINT tbl_receiver_uid UNIQUE(email, project_name)
);

-- Notification Receiver Table
CREATE SEQUENCE IF NOT EXISTS tbl_noti_receiver_id_seq;

CREATE TABLE IF NOT EXISTS sch_notification.tbl_noti_receiver
(
  id INTEGER NOT NULL DEFAULT nextval('tbl_noti_receiver_id_seq'),
  notification_id INTEGER NOT NULL,
  receiver_id INTEGER NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  is_delete BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT tbl_noti_receiver_pkey PRIMARY KEY (id),
  CONSTRAINT tbl_noti_receiver_uid UNIQUE(notification_id, receiver_id),
  CONSTRAINT tbl_noti_receiver_fk_notification FOREIGN KEY(notification_id) REFERENCES sch_notification.tbl_notification(id),
  CONSTRAINT tbl_noti_receiver_fk_receiver FOREIGN KEY(receiver_id) REFERENCES sch_notification.tbl_receiver(id)
)