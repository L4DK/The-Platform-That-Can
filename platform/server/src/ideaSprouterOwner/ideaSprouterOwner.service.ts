import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdeaSprouterOwnerServiceBase } from "./base/ideaSprouterOwner.service.base";

@Injectable()
export class IdeaSprouterOwnerService extends IdeaSprouterOwnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
