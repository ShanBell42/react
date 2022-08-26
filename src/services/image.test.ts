import axios from "axios";
import { postExerciseImage } from "services";
import { ExerciseImage } from "components/Exercises/models/image";

jest.mock("axios");


describe("Image service API tests", () => {


    test('POST a new exercise image', async () => {

        // Arrange
        const response = {
            "id": 1,
            "uuid": "004bb79f-36bf-4c48-8c00-d863d724717c",
            "exercise_base": 101,
            "image": "https://wger.de/media/exercise-images/1070/004bb79f-36bf-4c48-8c00-d863d724717c.jpg",
            "is_main": true,
            "status": "1",
            "style": "4"
        };
        const image = new ExerciseImage(
            1,
            "004bb79f-36bf-4c48-8c00-d863d724717c",
            "https://wger.de/media/exercise-images/1070/004bb79f-36bf-4c48-8c00-d863d724717c.jpg",
            true
        );

        // @ts-ignore
        axios.post.mockImplementation(() => Promise.resolve({ data: response }));

        // Act
        const result = await postExerciseImage(
            101,
            new File([], "test.jpg")
        );

        // Assert
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(result).toEqual(image);
    });
});
