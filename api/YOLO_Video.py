from ultralytics import YOLO
import cv2
import math


def video_detection(path_x):
    # 비디오 캡처 객체 생성
    cap = cv2.VideoCapture(path_x)
    frame_width = int(cap.get(3))  # 비디오의 너비와 높이 가져오기
    frame_height = int(cap.get(4))

    # YOLO 모델 로드
    model = YOLO("Lecture-45\YOLO-Weights\ppe.pt")
    classNames = ["Protective Helmet", "Shield", "Jacket", "Dust Mask", "Eye Wear", "Glove", "Protective Boots"]

    while True:
        # 비디오에서 프레임 읽기
        success, img = cap.read()
        results = model(img, stream=True)  # YOLO 모델로 객체 탐지

        for r in results:
            boxes = r.boxes
            for box in boxes:
                x1, y1, x2, y2 = map(int, box.xyxy[0])  # 객체의 좌표 추출
                conf = math.ceil((box.conf[0] * 100)) / 100  # 신뢰도
                cls = int(box.cls[0])  # 클래스 정보
                class_name = classNames[cls]
                label = f"{class_name} {conf}"
                t_size = cv2.getTextSize(label, 0, fontScale=1, thickness=2)[0]  # 텍스트 크기
                c2 = x1 + t_size[0], y1 - t_size[1] - 3

                # 클래스에 따른 색상 설정
                if class_name == "Dust Mask":
                    color = (0, 204, 255)
                elif class_name == "Glove":
                    color = (222, 82, 175)
                elif class_name == "Protective Helmet":
                    color = (0, 149, 255)
                else:
                    color = (85, 45, 255)

                if conf > 0.5:  # 신뢰도가 0.5 이상인 경우에만 표시
                    cv2.rectangle(img, (x1, y1), (x2, y2), color, 3)
                    cv2.rectangle(img, (x1, y1), c2, color, -1, cv2.LINE_AA)  # 텍스트 배경
                    cv2.putText(img, label, (x1, y1 - 2), 0, 1, [255, 255, 255], thickness=1, lineType=cv2.LINE_AA)

        yield img

    # OpenCV 창 닫기 및 리소스 정리
    cap.release()
    cv2.destroyAllWindows()
