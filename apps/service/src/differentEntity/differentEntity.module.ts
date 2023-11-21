import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DifferentEntityModuleBase } from "./base/differentEntity.module.base";
import { DifferentEntityService } from "./differentEntity.service";
import { DifferentEntityController } from "./differentEntity.controller";
import { DifferentEntityResolver } from "./differentEntity.resolver";

@Module({
  imports: [DifferentEntityModuleBase, forwardRef(() => AuthModule)],
  controllers: [DifferentEntityController],
  providers: [DifferentEntityService, DifferentEntityResolver],
  exports: [DifferentEntityService],
})
export class DifferentEntityModule {}
