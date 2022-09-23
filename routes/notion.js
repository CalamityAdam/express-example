const express = require('express');
const { Client } = require('@notionhq/client');
const router = express.Router();
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// GET /api/notion
router.get('/', async (req, res, next) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
});
