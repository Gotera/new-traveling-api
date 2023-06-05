import incorrectRequisition from "../errors/incorrectRequisition.js";

async function paginate(req, res, next) {
  try {
    let { limit = 10, page = 1, ordering = "_id:-1" } = req.query;
    let [orderingField, order] = ordering.split(":");

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result.data;

    if (limit > 0 && page > 0) {
      const paginatedResult = await result
        .find()
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ [orderingField]: order })
        .exec();
      const totalCount = {
        result: paginatedResult,
        count: req.result.count,
      };

      res.status(200).json(totalCount);
    } else {
      next(new incorrectRequisition());
    }
  } catch (err) {
    next(err);
  }
}

export default paginate;
