
  /**
   * @api {get} api/specialities Get All Specialities
   * @apiName get-all-specialities
   * @apiGroup Specialities
   * @apiVersion 1.0.0
   *
   * @apiDescription This request returns a list of all Specialities.
   *
   * @apiSuccess (Speciality Fields) {String} _id Unique Mongo generated id of the Speciality.
   * @apiSuccess (Speciality Fields) {String} name id of the Speciality.
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   {
   *     "success": true,
   *     "data": [
   *         {
   *             "id": "5afec038c10c3f372c71cdf2",
   *             "name": "Acupuncturists"
   *         },
   *         {
   *             "id": "5afec038c10c3f372c71cdf3",
   *             "name": "Allergists"
   *         },
   *         {
   *             "id": "5afec038c10c3f372c71cdf4",
   *             "name": "Audiologists"
   *         }
   *      ]
   *   }
   *
   * @apiError (Error 5xx) 500 Internal Server Error
   */


  /**
   * @api {post} api/users Register user
   * @apiName Register user
   * @apiGroup Users
   * @apiVersion 1.0.0
   *
   * @apiParamExample {json} Request body
   *     {
   *         "email": "test@test.com",
   *         "password": "qwer1234",
   *         "name": "Test 4",
   *         "nationalId": "12037671637",
   *         "phone": "35001237",
   *         "address": "Terminalgade 2, 2770 Kastrup"
   *     }
   *
   *
   * @apiDescription This request registers a new user.

   * @apiSuccess (Success 2xx) 201 User was created
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   {
   *     "success": true
   *   }
   *
   * @apiError (Error 4xx) 409 Internal Server Error
   * @apiError (Error 5xx) 500 Internal Server Error
   * @apiErrorExample (Error 4xx) 409 Conflict
   *   {
   *       "success": false,
   *       "error": "Conflict registering new user. User email, phone and national Id must be unique"
   *   }
   *
   *
   */
  /**
   * @api {get} /Users Register user
   * @apiName Register user
   * @apiGroup user
   * @apiVersion 1.0.0
   *
   * @api {get} /user/:id
   * @apiParamExample {json} Register user:
   *     {
   *         "email": "test@test.com",
   *         "password": "qwer1234",
   *         "name": "Test 4",
   *         "nationalId": "12037671637",
   *         "phone": "35001237",
   *         "address": "Terminalgade 2, 2770 Kastrup"
   *     }
   *
   *
   * @apiDescription This returns success or failure and applies a new user is success.
   *
   * @apiSuccess (Ingredient Fields) {String} _id Unique Mongo generated id of the Speciality.
   * @apiSuccess (Ingredient Fields) {String} name id of the Speciality.
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   {
   *     "success": true
   *   }
   *
   * @apiError (Error 5xx) 500 Internal Server Error
   *
   *
   */